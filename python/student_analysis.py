import pandas as pd
from gemini import get_gemini_prediction

def analyze_students(csv_file):
    try:
        # Load student data from CSV
        df = pd.read_csv(csv_file)

        # Prepare data for Gemini API
        predictions = []
        for _, row in df.iterrows():
            student_data = {
                "Assignments": [row["Assignment 1"], row["Assignment 2"], row["Assignment 3"], row["Assignment 4"]],
                "Mid Exam": row["Mid"],
                "End Exam": row["End"],
                "Total": row["Total"]
            }
            result = get_gemini_prediction(student_data)
            predictions.append(result)
        
        # Add predictions to DataFrame
        df["Gemini Prediction"] = predictions
        print(df[["Total", "result", "Gemini Prediction"]])
        
        return df

    except Exception as e:
        print(f"Error: {e}")

# Example Usage
if __name__ == "__main__":
    analyze_students("test.csv")
