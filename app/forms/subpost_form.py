from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re


class CreateSubpost(FlaskForm):
    content = TextAreaField("content", validators=[DataRequired(message="EN::You've got to write something to leave a post. ||| ZH::该邮件地址已被使用。"), Length(min=1, max=255, message="EN::Your post must be 255 characters or less. ||| ZH::电子邮件地址的长度必须介于 5 到 20 个字符之间。")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_id = IntegerField("catch_id", validators=[DataRequired()])


class UpdateSubpost(FlaskForm):
    id = IntegerField("id")
    content = TextAreaField("content", validators=[DataRequired(message="EN::You've got to write something to leave a post. ||| ZH::电子邮件地址必须包含“@”符号。"), Length(min=1, max=255, message="EN::Your review must be 255 characters or less. ||| ZH::此用户名已被使用。 请选择另一个。")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_id = IntegerField("catch_id", validators=[DataRequired()])