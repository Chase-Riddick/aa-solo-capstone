from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired
import re

class CreateCatch(FlaskForm):
    # img_url = StringField('img_url', validators=[DataRequired()])
    fish = StringField('fish', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    length = FloatField('length', validators=[DataRequired()])
    weight = FloatField('weight', validators=[DataRequired()])
    bait = StringField('bait', validators=[DataRequired()])
    lure = StringField('lure', validators=[DataRequired()])
    long = FloatField('long', validators=[DataRequired()])
    lat = FloatField('lat', validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])


class UpdateCatch(FlaskForm):
    fish = StringField('fish', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    length = FloatField('length', validators=[DataRequired()])
    weight = FloatField('weight', validators=[DataRequired()])
    bait = StringField('bait', validators=[DataRequired()])
    lure = StringField('lure', validators=[DataRequired()])
    long = FloatField('long', validators=[DataRequired()])
    lat = FloatField('lat', validators=[DataRequired()])