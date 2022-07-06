from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    img_url = db.Column(db.Text, nullable=False, default='https://localcatches.s3.us-west-2.amazonaws.com/default-user-img.png')
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    catches = db.relationship('Catch', back_populates='user')
    subposts = db.relationship('Subpost', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        out = {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'image_url': self.img_url,
            'created_at': self.created_at,
        }
        return out
