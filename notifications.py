from flask import Blueprint, request, jsonify

notifications_blueprint = Blueprint('notifications', __name__)

@notifications_blueprint.route('/', methods=['POST'])
def save_notifications():
    data = request.json
    email = data.get('email')
    phone = data.get('phone')

    # Here, you would normally save the notification settings to a database
    print(f'Saved notification settings: Email={email}, Phone={phone}')

    return jsonify({'message': 'Notification settings saved successfully'})
