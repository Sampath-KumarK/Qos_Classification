import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
import joblib
import os

def main():
    dataset_path = "public/ai_studio_code.csv"
    if not os.path.exists(dataset_path):
        print(f"Error: Dataset not found at {dataset_path}")
        return

    print(f"Loading dataset from {dataset_path}...")
    df = pd.read_csv(dataset_path)
    print(f"Dataset shape: {df.shape}")
    
    # Check class distribution
    print("\nClass distribution:")
    print(df['qos_class'].value_counts())

    # Only use the specific 4 features
    features = ['latency_ms', 'jitter_ms', 'packet_loss_pct', 'throughput_mbps']
    target = 'qos_class'

    X = df[features]
    y = df[target]

    # Stratified K-Fold Cross Validation
    skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    
    print("\nEvaluating with 5-Fold Stratified Cross-Validation...")
    accuracies = []
    precisions = []
    recalls = []
    f1s = []

    for train_index, test_index in skf.split(X, y):
        X_train, X_test = X.iloc[train_index], X.iloc[test_index]
        y_train, y_test = y.iloc[train_index], y.iloc[test_index]

        model_cv = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42, class_weight='balanced')
        model_cv.fit(X_train, y_train)
        y_pred = model_cv.predict(X_test)

        accuracies.append(accuracy_score(y_test, y_pred))
        precisions.append(precision_score(y_test, y_pred, average='weighted', zero_division=0))
        recalls.append(recall_score(y_test, y_pred, average='weighted', zero_division=0))
        f1s.append(f1_score(y_test, y_pred, average='weighted', zero_division=0))

    print(f"Mean CV Accuracy:  {np.mean(accuracies):.4f} +/- {np.std(accuracies):.4f}")
    print(f"Mean CV Precision: {np.mean(precisions):.4f}")
    print(f"Mean CV Recall:    {np.mean(recalls):.4f}")
    print(f"Mean CV F1-Score:  {np.mean(f1s):.4f}")

    print("\nTraining final model on full dataset...")
    final_model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42, class_weight='balanced')
    final_model.fit(X, y)

    # Let's print the confusion matrix on the full dataset (as a sanity check)
    y_pred_full = final_model.predict(X)
    print("\nConfusion Matrix (Full Dataset):")
    print(confusion_matrix(y, y_pred_full))

    # Save the model
    model_path = "qos_model.joblib"
    joblib.dump(final_model, model_path)
    print(f"\nModel saved successfully to {model_path}")
    print("Feature importance:")
    for feature, imp in zip(features, final_model.feature_importances_):
        print(f"  {feature}: {imp:.4f}")

if __name__ == "__main__":
    main()
