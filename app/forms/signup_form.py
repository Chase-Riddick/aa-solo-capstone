from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('This email address is already in use.')

def validate_email(form, field):
    email = field.data
    if len(email) < 5 or len(email) > 50:
        raise ValidationError('The email address must be between 5 and 20 characters long.')
    if not '@' in email:
        raise ValidationError("The email address must contain an '@' symbol.")
    return email


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('This username is already in use. Please choose another.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message = "A username is required."), username_exists, Length(min=3, max=15, message="The username must be between 3 and 15 characters long.")])
    email = StringField('email', validators=[DataRequired(message = "An email is required."), user_exists, validate_email])
    password = StringField('password', validators=[DataRequired(message = "A password is required."), Length(min=5, message="The password must be at least five characters long.")])
