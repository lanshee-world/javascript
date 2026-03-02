import json
# assuming jsonString is the variable holding the data received from javascript
jsonString= {
    "name" : "John",
    "age" : "26",
    "city" : "Tunis"
    }
print(jsonString["name"])
python_dict = json.dumps(jsonString)

print(python_dict)