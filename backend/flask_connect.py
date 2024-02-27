from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/exercise", methods=["POST"])
def get_new_exercise():
    '''

    '''
    receive = request.json['message']
    
    # query user table and see if exercise is in table

    # if e name is in table or not, determine 0 or 1

    return jsonify({"validity": 0})


# def receive_exercise_data():
#     '''
    
#     '''
#     return




if __name__ == '__main__':
    app.run(debug=True)