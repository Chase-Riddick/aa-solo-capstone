from app.models import db, Condition, Catch
import requests
import json

def seed_conditions():

    def get_catch_times():
        catch_times = []
        catchesA = Catch.query.filter(Catch.id < 10).all()
        catchesAObj = [catch.to_dict() for catch in catchesA]
        for single_catch in catchesAObj:
            catch_times.append(single_catch['catch_time'])
        return catch_times

    def get_catch_times_china():
        catch_times = []
        catchesA = Catch.query.filter(Catch.id > 9).all()
        catchesAObj = [catch.to_dict() for catch in catchesA]
        for single_catch in catchesAObj:
            catch_times.append(single_catch['catch_time'])
        return catch_times

    catch_times_gen = get_catch_times()
    catch_times_china = get_catch_times_china()

    def get_weather(catch_times):
        conditions = []
        for catch_time in catch_times:
            catch_time_split = catch_time.split("-")
            catch_year = catch_time_split[0]
            catch_month = catch_time_split[1]
            catch_date = catch_time_split[2]
            catch_hour = catch_time_split[3]
            condition = {}
            res = requests.get(f"https://api.weatherapi.com/v1/history.json?key=9724b547848d4baf884180226220907&q=46.5584,-122.2758&dt={catch_year}-{catch_month}-{catch_date}")
            json_data = json.loads(res.text)
            condition_json_data = json_data['forecast']['forecastday'][0]['hour'][int(catch_hour)]
            condition['condition_text'] = condition_json_data['condition']['text']
            condition['condition_icon'] = condition_json_data['condition']['icon']
            condition['temp'] = condition_json_data['temp_f']
            condition['wind'] = f"{condition_json_data['wind_mph']} {condition_json_data['wind_dir']}"
            condition['precip'] = condition_json_data['precip_in']
            condition['cloud'] = condition_json_data['cloud']
            condition['humdity'] = condition_json_data['humidity']
            condition['pressure'] = condition_json_data['pressure_in']
            conditions.append(condition)
            print('*******************')
        return(conditions)

    def get_weather_china(catch_times):
        conditions = []
        for catch_time in catch_times:
            catch_time_split = catch_time.split("-")
            catch_year = catch_time_split[0]
            catch_month = catch_time_split[1]
            catch_date = catch_time_split[2]
            catch_hour = catch_time_split[3]
            condition = {}
            res = requests.get(f"https://api.weatherapi.com/v1/history.json?key=9724b547848d4baf884180226220907&q=38.951,121.169&dt={catch_year}-{catch_month}-{catch_date}")
            json_data = json.loads(res.text)
            condition_json_data = json_data['forecast']['forecastday'][0]['hour'][int(catch_hour)]
            condition['condition_text'] = condition_json_data['condition']['text']
            condition['condition_icon'] = condition_json_data['condition']['icon']
            condition['temp'] = condition_json_data['temp_f']
            condition['wind'] = f"{condition_json_data['wind_mph']} {condition_json_data['wind_dir']}"
            condition['precip'] = condition_json_data['precip_in']
            condition['cloud'] = condition_json_data['cloud']
            condition['humdity'] = condition_json_data['humidity']
            condition['pressure'] = condition_json_data['pressure_in']
            conditions.append(condition)
            print('*******************')
        return(conditions)

    condtions_arr = get_weather(catch_times_gen)
    condtions_arr_china = get_weather_china(catch_times_china)
    print(condtions_arr)
    print(condtions_arr_china)

    db.session.add_all(
        [
        Condition(
            catch_id = 1,
            condition_text = condtions_arr[0]['condition_text'],
            condition_icon = condtions_arr[0]['condition_icon'],
            temp = condtions_arr[0]['temp'],
            wind = condtions_arr[0]['wind'],
            precip = condtions_arr[0]['precip'],
            cloud = condtions_arr[0]['cloud'],
            humdity = condtions_arr[0]['humdity'],
            pressure = condtions_arr[0]['pressure'],
            ),
        Condition(
            catch_id = 2,
            condition_text = condtions_arr[1]['condition_text'],
            condition_icon = condtions_arr[1]['condition_icon'],
            temp = condtions_arr[1]['temp'],
            wind = condtions_arr[1]['wind'],
            precip = condtions_arr[1]['precip'],
            cloud = condtions_arr[1]['cloud'],
            humdity = condtions_arr[1]['humdity'],
            pressure = condtions_arr[1]['pressure'],
            ),
        Condition(
            catch_id = 3,
            condition_text = condtions_arr[2]['condition_text'],
            condition_icon = condtions_arr[2]['condition_icon'],
            temp = condtions_arr[2]['temp'],
            wind = condtions_arr[2]['wind'],
            precip = condtions_arr[2]['precip'],
            cloud = condtions_arr[2]['cloud'],
            humdity = condtions_arr[2]['humdity'],
            pressure = condtions_arr[2]['pressure'],
            ),
        Condition(
            catch_id = 4,
            condition_text = condtions_arr[3]['condition_text'],
            condition_icon = condtions_arr[3]['condition_icon'],
            temp = condtions_arr[3]['temp'],
            wind = condtions_arr[3]['wind'],
            precip = condtions_arr[3]['precip'],
            cloud = condtions_arr[3]['cloud'],
            humdity = condtions_arr[3]['humdity'],
            pressure = condtions_arr[3]['pressure'],
            ),
        Condition(
            catch_id = 5,
            condition_text = condtions_arr[4]['condition_text'],
            condition_icon = condtions_arr[4]['condition_icon'],
            temp = condtions_arr[4]['temp'],
            wind = condtions_arr[4]['wind'],
            precip = condtions_arr[4]['precip'],
            cloud = condtions_arr[4]['cloud'],
            humdity = condtions_arr[4]['humdity'],
            pressure = condtions_arr[4]['pressure'],
            ),
        Condition(
            catch_id = 6,
            condition_text = condtions_arr[5]['condition_text'],
            condition_icon = condtions_arr[5]['condition_icon'],
            temp = condtions_arr[5]['temp'],
            wind = condtions_arr[5]['wind'],
            precip = condtions_arr[5]['precip'],
            cloud = condtions_arr[5]['cloud'],
            humdity = condtions_arr[5]['humdity'],
            pressure = condtions_arr[5]['pressure'],
            ),
        Condition(
            catch_id = 7,
            condition_text = condtions_arr[6]['condition_text'],
            condition_icon = condtions_arr[6]['condition_icon'],
            temp = condtions_arr[6]['temp'],
            wind = condtions_arr[6]['wind'],
            precip = condtions_arr[6]['precip'],
            cloud = condtions_arr[6]['cloud'],
            humdity = condtions_arr[6]['humdity'],
            pressure = condtions_arr[6]['pressure'],
            ),
        Condition(
            catch_id = 8,
            condition_text = condtions_arr[7]['condition_text'],
            condition_icon = condtions_arr[7]['condition_icon'],
            temp = condtions_arr[7]['temp'],
            wind = condtions_arr[7]['wind'],
            precip = condtions_arr[7]['precip'],
            cloud = condtions_arr[7]['cloud'],
            humdity = condtions_arr[7]['humdity'],
            pressure = condtions_arr[7]['pressure'],
            ),
        Condition(
            catch_id = 9,
            condition_text = condtions_arr[8]['condition_text'],
            condition_icon = condtions_arr[8]['condition_icon'],
            temp = condtions_arr[8]['temp'],
            wind = condtions_arr[8]['wind'],
            precip = condtions_arr[8]['precip'],
            cloud = condtions_arr[8]['cloud'],
            humdity = condtions_arr[8]['humdity'],
            pressure = condtions_arr[8]['pressure'],
            ),
        Condition(
            catch_id = 10,
            condition_text = condtions_arr[9]['condition_text'],
            condition_icon = condtions_arr[9]['condition_icon'],
            temp = condtions_arr[9]['temp'],
            wind = condtions_arr[9]['wind'],
            precip = condtions_arr[9]['precip'],
            cloud = condtions_arr[9]['cloud'],
            humdity = condtions_arr[9]['humdity'],
            pressure = condtions_arr[9]['pressure'],
            ),
        Condition(
            catch_id = 11,
            condition_text = condtions_arr[10]['condition_text'],
            condition_icon = condtions_arr[10]['condition_icon'],
            temp = condtions_arr[10]['temp'],
            wind = condtions_arr[10]['wind'],
            precip = condtions_arr[10]['precip'],
            cloud = condtions_arr[10]['cloud'],
            humdity = condtions_arr[10]['humdity'],
            pressure = condtions_arr[10]['pressure'],
            ),
        Condition(
            catch_id = 12,
            condition_text = condtions_arr[11]['condition_text'],
            condition_icon = condtions_arr[11]['condition_icon'],
            temp = condtions_arr[11]['temp'],
            wind = condtions_arr[11]['wind'],
            precip = condtions_arr[11]['precip'],
            cloud = condtions_arr[11]['cloud'],
            humdity = condtions_arr[11]['humdity'],
            pressure = condtions_arr[11]['pressure'],
            ),
        ]
    )
    db.session.commit()

def undo_conditions():
    db.session.execute('TRUNCATE conditions RESTART IDENTITY CASCADE;')
    db.session.commit()