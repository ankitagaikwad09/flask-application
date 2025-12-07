from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400

    print(f"Received data from frontend: {data}")

    response = {
        "status": "success",
        "message": f"Data received successfully for user: {data.get('name')}"
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
