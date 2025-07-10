# AI-Compliance-Co-Pilot

An AI-powered co-pilot designed to assist organizations in managing and adhering to AI-related compliance regulations and internal policies.

## Features

*   **Document Analysis:** Ability to upload and analyze compliance documents (e.g., policies, regulations, legal texts) using Natural Language Processing (NLP) to extract key compliance requirements and identify potential risks.
*   **Policy Generation/Review:** Assist in drafting or reviewing AI-related policies by suggesting clauses or identifying gaps based on best practices and regulatory frameworks.
*   **Risk Assessment:** Identify potential compliance risks associated with AI systems and provide recommendations for mitigation.
*   **Regulatory Tracking:** Monitor changes in AI regulations and alert users to updates that might impact their compliance posture.
*   **Reporting & Dashboards:** Generate reports and visualize compliance status, identified risks, and policy adherence.

## Technologies Used

*   **Backend:** Python (Flask, spaCy/NLTK, scikit-learn/TensorFlow/PyTorch)
*   **Frontend:** JavaScript (React), HTML, CSS
*   **Database:** PostgreSQL/SQLite (for storing compliance data, policies, and user information)

## Installation

To set up and run the AI-Compliance-Co-Pilot project locally, follow these steps:

### Prerequisites

*   Python 3.8+
*   Node.js 14+
*   npm (Node Package Manager)
*   pip (Python Package Installer)

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Run the Flask application:
    ```bash
    python app.py
    ```
    The backend server will typically run on `http://localhost:5000`.

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install Node.js dependencies:
    ```bash
    npm install
    ```
3.  Build the React application for production:
    ```bash
    npm run build
    ```
    This will create a `build` folder containing the static files.

### Running the Full Application

Since the Flask backend is configured to serve the React frontend, you only need to run the Flask application. Ensure you have built the frontend first.

1.  Start the Flask application from the `backend` directory:
    ```bash
    cd backend
    python app.py
    ```
2.  Open your web browser and navigate to `http://localhost:5000` (or the exposed URL if running in a sandbox environment). The frontend application will be served by the Flask server.

## Usage

Once the application is running, you can:

1.  **Analyze Documents:** Enter text into the provided textarea and click "Analyze Document" to get a basic analysis (currently a placeholder based on keywords).

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (Note: A LICENSE file will need to be created separately if not already present.)


