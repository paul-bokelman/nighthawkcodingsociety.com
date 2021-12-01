
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import time
import random
from multiprocessing import Value
app = Flask(__name__)
app.config['SECRET_KEY'] = 'I<+g/P2N$}0GXOf'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['CORS_HEADERS'] = 'Content-Type'
db = SQLAlchemy(app)
CORS(app)

# MODELS

# class Color(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     color = db.Column(db.String(50))


counter = Value('i', 0)


@app.route('/greeting', methods=['GET'])
def greeting():
    name = request.args.get('name')
    with counter.get_lock():
        counter.value += 1
        out = counter.value
    return jsonify({'id': out, 'content': f'Hello, {name}!'})

# # CSP Algorithm


# @app.route('/csp/alg/binarysearch', methods=['GET', 'POST'])
# def binary_search():
#     d = request.get_json()

#     def binary_search(arr, x):
#         low = 0
#         high = len(arr) - 1
#         mid = 0
#         while low <= high:
#             mid = (high + low) // 2
#             if arr[mid] < x:
#                 low = mid + 1
#             elif arr[mid] > x:
#                 high = mid - 1
#             else:
#                 return mid
#         return -1
#     result = binary_search(d['arr'], d['x'])
#     message = ""
#     if result != -1:
#         message = f"Value '{d['x']}' is present at index {str(result)} in the array {d['arr']} (sorted)."
#         status = True
#     else:
#         message = f"Value '{d['x']}' is not present in the array, {d['arr']}."
#         status = False
#     return jsonify({'message': message, 'status': status})


# @app.route('/csp/alg/bubblesort', methods=['GET', 'POST'])
# def bubble_sort():
#     d = request.get_json()
#     arr = d['arr']

#     def bubbleSort(arr):
#         n = len(arr)
#         for i in range(n-1):
#             for j in range(0, n-i-1):
#                 if arr[j] > arr[j + 1]:
#                     arr[j], arr[j + 1] = arr[j + 1], arr[j]
#     bubbleSort(arr)
#     return jsonify({'arr': arr, 'status': True})


# @app.route('/csp/alg/palindrome', methods=['GET', 'POST'])
# def palindrome():
#     d = request.get_json()

#     def isPalindrome(str):
#         for i in range(0, int(len(str)/2)):
#             if str[i] != str[len(str)-i-1]:
#                 return False
#         return True
#     res = isPalindrome(d['str'])
#     if (res):
#         message = f"{d['str']} is a palindrome."
#         status = True
#     else:
#         message = f"{d['str']} is not a palindrome."
#         status = False

#     return jsonify({'message': message, 'status': status})

# # REST API


# # SQL CRUD

# # Create
# @app.route('/csp/data/sql/add/color', methods=['POST'])
# def add_color():
#     d = request.get_json()
#     color = Color(color=d['color'])
#     db.session.add(color)
#     db.session.flush()
#     db.session.commit()
#     return jsonify({'color': d['color'], 'id': color.id})

# # Read all


# @app.route('/csp/data/sql/read/colors', methods=['GET'])
# def read_colors():
#     colors_list = Color.query.all()
#     colors = []
#     for color in colors_list:
#         colors.append({'name': color.color, 'id': color.id})
#     response = jsonify({'all_colors': colors})
#     return response, 200

# # Read 5 recent colors


# @app.route('/csp/data/sql/read/colors/recent', methods=['GET'])
# def read_recent():
#     colors_list = Color.query.order_by(Color.id.desc()).limit(5).all()
#     colors = []
#     for color in colors_list:
#         colors.append({'name': color.color, 'id': color.id})
#     response = jsonify(
#         {'colors': colors[:5], "current_time": time.strftime("%x %X", time.gmtime())})
#     return response, 200

# # Read 5 first colors


# @app.route('/csp/data/sql/read/colors/first', methods=['GET'])
# def read_first():
#     colors_list = Color.query.order_by(Color.id.asc()).limit(5).all()
#     colors = []
#     for color in colors_list:
#         colors.append({'name': color.color, 'id': color.id})
#     response = jsonify(
#         {'colors': colors[:5], "current_time": time.strftime("%x %X", time.gmtime())})
#     return response, 200

# # Update


# @app.route('/csp/data/sql/update/color', methods=['PUT'])
# def update_color():
#     d = request.get_json()
#     color = Color.query.filter_by(id=d['id']).first()
#     old = color.color
#     color.color = d['name']
#     db.session.commit()
#     return f"Updated {old} to {d['name']} successfully!", 200

# # Delete


# @app.route('/csp/data/sql/remove/color', methods=['DELETE'])
# def remove_color():
#     d = request.get_json()
#     color = Color.query.get(int(d['id']))
#     old = [color.color, color.id]
#     db.session.delete(color)
#     db.session.commit()
#     return f'Removed {old[0]} (id:{old[1]}) successfully', 201

# # Get user records


# @app.route('/csp/data/sql/read/colors/user', methods=['POST'])
# def read_user():
#     d = request.get_json()
#     user_colors = Color.query.filter(Color.id.in_(
#         d['ids'])).order_by(Color.id.desc()).limit(5).all()
#     colors = []
#     for color in user_colors:
#         colors.append({'name': color.color, 'id': color.id})
#     return jsonify({'colors': colors})

# # API

# # All paginated colors


# @app.route('/csp/data/rest/table', methods=['GET'])
# def table():
#     page = request.args.get('page', default=1, type=int)
#     record_query = Color.query.paginate(
#         page=page, error_out=False, max_per_page=5)
#     res = dict(datas=record_query.items,
#                total=record_query.total,
#                current_page=record_query.page,
#                per_page=record_query.per_page,
#                pages=record_query.pages)
#     colors = []
#     for color in res.get('datas'):
#         colors.append({'name': color.color, 'id': color.id})
#     return jsonify({'colors': colors, 'total': res.get('total'), 'current_page': res.get('current_page'), 'per_page': res.get('per_page'), 'pages': res.get('pages')})

# # Count all colors


# @app.route('/csp/data/rest/chart', methods=['GET'])
# def chart():
#     valid_colors = [
#         "red",
#         "orange",
#         "yellow",
#         "green",
#         "blue",
#         "purple",
#         "black",
#         "brown",
#         "grey",
#         "white",
#     ]
#     colors_list = []
#     for color in valid_colors:
#         count = Color.query.filter(Color.color == color).count()
#         colors_list.append({'name': color, 'count': count})
#     return jsonify({'colors_list': colors_list})

# # seed database with valid colors


# @app.route('/csp/data/rest/seed', methods=['GET'])
# def seed():
#     valid_colors = [
#         "red",
#         "orange",
#         "yellow",
#         "green",
#         "blue",
#         "purple",
#         "black",
#         "brown",
#         "grey",
#         "white",
#     ]
#     for i in range(100):
#         choice = random.choice(valid_colors)
#         color = Color(color=choice)
#         db.session.add(color)
#         db.session.flush()
#     db.session.commit()
#     return f"Seeded database with 100 colors successfully!", 200


if __name__ == "__main__":
    app.run(debug=True)
