import json
# assuming jsonString is the variable holding the data received from javascript
jsonString = {
    "name" : "John",
    "age" : "26",
    "city" : "Tunis"
    }
python_dict = json.loads(jsonString)

print(python_dict["age"])