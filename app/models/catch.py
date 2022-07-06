from .db import db
from datetime import datetime
from .condition import Condition


class Catch(db.Model):
    __tablename__ = 'catches'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    img_url = db.Column(db.Text)
    fish = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    length = db.Column(db.Float, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    bait = db.Column(db.String(80), nullable=True)
    lure = db.Column(db.String(80), nullable=True)
    long = db.Column(db.Float, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    user = db.relationship("User", back_populates="catches")
    subposts = db.relationship("Subpost", back_populates="catch")
    condition = db.relationship("Condition", back_populates="catch", uselist=False)

    def to_dict(self, **kwargs):
        out = {
            'id': self.id,
            'user_id': self.user_id,
            'img_url': self.img_url,
            'fish': self.fish,
            'description': self.description,
            'length': self.length,
            'weight': self.weight,
            'bait': self.bait,
            'lure': self.lure,
            'long': self.long,
            'lat': self.lat,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

        for key, collection in kwargs.items():
            # might neeed to import the to_dict methods for the associated models
            if key == 'condition': out[key] = collection.to_dict()
            else: out[key] = [ele.to_dict() for ele in collection]

        return out