
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app, origins="*")

# Serve React App
@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/analyze", methods=["POST"])
def analyze_document():
    data = request.get_json()
    document_text = data.get("text", "")

    # Simple placeholder for AI analysis logic
    if "compliance" in document_text.lower():
        analysis_result = "Document contains compliance-related terms. Further review recommended."
    elif "risk" in document_text.lower():
        analysis_result = "Document mentions potential risks. Flagged for assessment."
    else:
        analysis_result = "No specific compliance or risk terms detected in this document."

    return jsonify({"result": analysis_result})

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)


