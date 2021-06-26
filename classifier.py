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


def write_data(var):
    file = open('results.csv', 'w+', newline='')
    with file:
        write = csv.writer(file)
        write.writerows(var)
    return file


def count_correct(csv_file):
    counter = 0
    with open(csv_file, newline='') as file:
        reader = csv.DictReader(file)
        exp_1 = [row for row in reader if row['path'].startswith('exp_1') and row['direction'] == 'left']
        exp_2 = [row for row in reader if row['path'].startswith('exp_2') and row['direction'] == 'left']
        for row in exp_1:
            print(row)
            counter = counter + 1
        for row in exp_2:
            print(row)




if __name__ == "__main__":
    #x = read_data()
    #results = write_data(x)
    count_correct('results.csv')
