from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired
import re

class CreateCatch(FlaskForm):
    pass
    # title = StringField('title', validators=[DataRequired()])
    # description = TextAreaField('description', validators=[DataRequired()])
    # price = FloatField('price', validators=[DataRequired()])
    # brew_tags = DictField("brew_tags")
    # user_id = IntegerField("user_id", validators=[DataRequired()])


class UpdateCatch(FlaskForm):
    pass
    # id = IntegerField("id")
    # title = StringField('title', validators=[DataRequired()])
    # description = TextAreaField('description', validators=[DataRequired()])
    # price = FloatField('price', validators=[DataRequired()])
    # brew_tags = DictField("brew_tags")