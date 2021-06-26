import csv
import sys

data = sys.argv[1]
img_list = []


def read_data():
    with open(data, newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row['img3'].startswith('exp_1_50'):
                img_list.append((row['img3'], row['key_resp_4.keys'], 0))
            elif row['img3'].startswith('exp_2_50'):
                img_list.append((row['img3'], row['key_resp_4.keys'], 0))
            elif row['img3'].startswith('exp_3_50'):
                img_list.append((row['img3'], row['key_resp_4.keys'], 1))
    return img_list


def put_data(var):
    file = open('results.csv', 'w+', newline='')
    with file:
        write = csv.writer(file)
        write.writerows(var)
    return file


if __name__ == "__main__":
    x = read_data()
    results = put_data(x)
