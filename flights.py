from flask import Blueprint, jsonify

flights_blueprint = Blueprint('flights', __name__)

@flights_blueprint.route('/', methods=['GET'])
def get_flights():
    # Mock data for demonstration purposes
    flights = [
        { 'id': 1, 'flightNumber': 'AA123', 'status': 'On Time', 'gate': 'A1' },
        { 'id': 2, 'flightNumber': 'UA456', 'status': 'Delayed', 'gate': 'B2' }
    ]
    return jsonify(flights)
