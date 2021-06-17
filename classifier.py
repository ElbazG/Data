import csv
import sys

data = sys.argv[1]

with open(data, newline='') as file:
    reader = csv.DictReader (file)
    for row in reader:
        print(row['img3'], row['key_resp_4.keys'])

