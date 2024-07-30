from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/sampleairlines"
mongo = PyMongo(app)

@app.route('/api/flights', methods=['GET'])
def get_flights():
    flights_collection = mongo.db.flights
    flights = list(flights_collection.find({}, {'_id': 0}))
    return jsonify(flights)

@app.route('/api/notifications', methods=['POST'])
def save_notifications():
    data = request.json
    email = data.get('email')
    phone = data.get('phone')
    # Here, you would normally save the notification settings to a database
    print(f'Saved notification settings: Email={email}, Phone={phone}')
    return jsonify({'message': 'Notification settings saved successfully'})

if __name__ == '__main__':
    app.run(debug=True)
