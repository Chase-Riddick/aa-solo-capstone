from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('EN::This email address is already in use. ||| ZH::该邮件地址已被使用。')

def validate_email(form, field):
    email = field.data
    if len(email) < 5 or len(email) > 50:
        raise ValidationError('EN::The email address must be between 5 and 20 characters long. ||| ZH::电子邮件地址的长度必须介于5到20个字符之间。')
    if not '@' in email:
        raise ValidationError("EN::The email address must contain an '@' symbol. ||| ZH::电子邮件地址必须包含“@”符号。")
    return email


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('EN::This username is already in use. Please choose another. ||| ZH::此用户名已被使用。 请选择另一个。')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message = "EN::A username is required. ||| ZH::用户名是必需的。"), username_exists, Length(min=3, max=18, message="EN::The username must be between 3 and 20 characters long. ||| ZH::用户名长度必须介于 3 到 20 个字符之间。")])
    email = StringField('email', validators=[DataRequired(message = "EN::An email is required. ||| ZH::需要一封电邮。"), user_exists, validate_email])
    password = StringField('password', validators=[DataRequired(message = "EN::A password is required. ||| ZH::"), Length(min=5, message="EN::The password must be at least five characters long. ||| ZH::需要密码。")])
