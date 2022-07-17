from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re

class CreateCatch(FlaskForm):
    # img_url = StringField('img_url', validators=[DataRequired()])
    fish = StringField('fish', validators=[DataRequired(message="You must say what you caught."), Length(min=3, max=25, message="The name of the fish must be 25 characters or less.")])
    description = StringField('description', validators=[Length(max=255, message="The description of the catch must be 255 characters or less")])
    length = FloatField('length', validators=[DataRequired(message="You must input the approximate length (inches)).")])
    weight = FloatField('weight', validators=[DataRequired(message="You must input the approximate weight (lbs).")])
    bait = StringField('bait', validators=[Length(max=80, message="The description of the catch must be 80 characters or less")])
    lure = StringField('lure', validators=[Length(max=80, message="The description of the catch must be 80 characters or less")])
    long = FloatField('long', validators=[DataRequired(message="Position Data is needed.")])
    lat = FloatField('lat', validators=[DataRequired(message="Position Data is needed.")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_time = StringField("catch_time", validators=[DataRequired()])


class UpdateCatch(FlaskForm):
    id = IntegerField("id", validators=[DataRequired()])
    fish = StringField('fish', validators=[DataRequired(message="You must say what you caught."), Length(min=3, max=25, message="The name of the fish must be 25 characters or less.")])
    description = StringField('description', validators=[Length(max=255, message="The description of the catch must be 255 characters or less")])
    length = FloatField('length', validators=[DataRequired(message="You must input the approximate length (inches)).")])
    weight = FloatField('weight', validators=[DataRequired(message="You must input the approximate weight (lbs).")])
    bait = StringField('bait', validators=[Length(max=80, message="The description of the catch must be 80 characters or less")])
    lure = StringField('lure', validators=[Length(max=80, message="The description of the catch must be 80 characters or less")])
    long = FloatField('long', validators=[DataRequired(message="Position Data is needed.")])
    lat = FloatField('lat', validators=[DataRequired(message="Position Data is needed.")])