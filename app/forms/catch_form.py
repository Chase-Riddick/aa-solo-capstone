from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField, StringField, BooleanField, FloatField, TextAreaField, Field
from wtforms import validators
from wtforms.validators import DataRequired, Length
import re



class CreateCatch(FlaskForm):
    # img_url = StringField('img_url', validators=[DataRequired()])
    fish = StringField('fish', validators=[DataRequired(message="EN::You must say what you caught. ||| ZH::你必须说你抓到了什么。"), Length(min=3, max=25, message="EN::The name of the fish must be 3 to 25 characters or less. ||| ZH::鱼名不得超过3到25个字符。")])
    description = StringField('description', validators=[Length(max=255, message="EN::The description of the catch must be 255 characters or less ||| ZH::渔获描述不得超过255个字符。")])
    length = FloatField('length', validators=[DataRequired(message="EN::You must input the approximate length (inches)). ||| ZH::您必须输入近似长度。")])
    weight = FloatField('weight', validators=[DataRequired(message="EN::You must input the approximate weight (lbs). ||| ZH::您必须输入近似重量（磅）。")])
    bait = StringField('bait', validators=[Length(max=80, message="EN::The description of the bait must be 80 characters or less. ||| ZH::诱饵描述不得超过 80 个字符。")])
    lure = StringField('lure', validators=[Length(max=80, message="EN::The description of the lure must be 80 characters or less. ||| ZH::诱饵描述不得超过 80 个字符。")])
    long = FloatField('long', validators=[DataRequired(message="EN::Position Data is needed. ||| ZH::需要位置数据。")])
    lat = FloatField('lat', validators=[DataRequired(message="EN::Position Data is needed. ||| ZH::需要位置数据。")])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    catch_time = StringField("catch_time", validators=[DataRequired()])


class UpdateCatch(FlaskForm):
    id = IntegerField("id", validators=[DataRequired()])
    fish = StringField('fish', validators=[DataRequired(message="EN::You must say what you caught. ||| ZH::你必须说你抓到了什么。"), Length(min=3, max=25, message="EN::The name of the fishmust be 3 to 25 characters or less. ||| ZH::鱼名不得超过3到25个字符。")])
    description = StringField('description', validators=[Length(max=255, message="EN::The description of the catch must be 255 characters or less ||| ZH::渔获描述不得超过255个字符。")])
    length = FloatField('length', validators=[DataRequired(message="EN::You must input the approximate length (inches)). ||| ZH::您必须输入近似长度。")])
    weight = FloatField('weight', validators=[DataRequired(message="EN::You must input the approximate weight (lbs). ||| ZH::您必须输入近似重量（磅）。")])
    bait = StringField('bait', validators=[Length(max=80, message="EN::The description of the bait must be 80 characters or less. ||| ZH::诱饵描述不得超过 80 个字符。")])
    lure = StringField('lure', validators=[Length(max=80, message="EN::The description of the lure must be 80 characters or less.  ||| ZH::诱饵描述不得超过 80 个字符。")])
    long = FloatField('long', validators=[DataRequired(message="EN::Position Data is needed. ||| ZH::需要位置数据。")])
    lat = FloatField('lat', validators=[DataRequired(message="EN::Position Data is needed. ||| ZH::需要位置数据。")])