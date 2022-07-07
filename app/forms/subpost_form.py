from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re


class CreateSubpost(FlaskForm):
    content = TextAreaField("content", validators=[DataRequired(message="You've got to write something to leave a post."), Length(min=1, max=255, message="Your post must be 255 characters or less.")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_id = IntegerField("catch_id", validators=[DataRequired()])


class UpdateSubpost(FlaskForm):
    id = IntegerField("id")
    content = TextAreaField("content", validators=[DataRequired(message="You've got to write something to leave a post."), Length(min=1, max=255, message="Your review must be 255 characters or less.")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_id = IntegerField("catch_id", validators=[DataRequired()])