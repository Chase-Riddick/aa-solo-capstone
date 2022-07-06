from .db import db
from datetime import datetime


class Subpost(db.Model):
    __tablename__ = 'subposts'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    catch_id = db.Column(db.Integer, db.ForeignKey('catches.id'), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship('User', back_populates='subposts')
    catch = db.relationship('Catch', back_populates='subposts')

    def to_dict(self):
        out = {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'catch_id': self.catch_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
        return out