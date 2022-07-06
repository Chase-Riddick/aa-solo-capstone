from .db import db
from datetime import datetime


class Condition(db.Model):
    __tablename__ = 'conditions'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    catch_id = db.Column(db.Integer, db.ForeignKey('catches.id'), nullable=False, unique=True)
    temp = db.Column(db.Float, nullable=False)
    wind = db.Column(db.Float, nullable=False)
    precip = db.Column(db.Float, nullable=False)
    cloud = db.Column(db.Float, nullable=False)
    humdity = db.Column(db.Float, nullable=False)
    pressure = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # relationships
    catch = db.relationship("Catch", back_populates="condition")

    def to_dict(self, **kwargs):
        out = {
            'id': self.id,
            'catch_id': self.catch_id,
            'temp': self.temp,
            'wind': self.wind,
            'precip': self.precip,
            'cloud': self.cloud,
            'humdity': self.humdity,
            'pressure': self.pressure,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
        return out