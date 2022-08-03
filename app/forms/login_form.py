from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('EN::Email provided not found. ||| ZH::未找到提供的电子邮件。')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('EN::No such user exists. ||| ZH::不存在这样的用户。')
    if not user.check_password(password):
        raise ValidationError('EN::Password was incorrect. ||| ZH::密码不正确。')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message = "EN::An email is required. ||| ZH::需要一封电邮。"), user_exists])
    password = StringField('password', validators=[DataRequired(message = "EN::A password is required. ||| ZH::需要密码。"), password_matches])
