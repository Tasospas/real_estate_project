import os
from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app) 

DATABASE_URL = os.getenv("DATABASE_URL")

@app.route('/properties')
def get_properties():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        cur.execute('SELECT * FROM properties')
        rows = cur.fetchall()

        properties_list = []
        for row in rows:
            properties_list.append({
                'id': row[0],
                'title': row[1],
                'description': row[2],
                'price': row[3],
                'address': row[6],
                'latitude': row[5],
                'longitude': row[4],
                'image': row[7]

            })

        cur.close()
        conn.close()

        return jsonify(properties_list)

    except Exception as e:
        return jsonify(error=str(e))

if __name__ == '__main__':
    app.run(debug=True)
