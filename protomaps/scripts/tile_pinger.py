import requests
from random import randint


def main():

    for i in range(100000):
        print(i)
        z = randint(5, 14)
        x = randint(50, 500)
        y = randint(50, 500)

        url = f"https://d3a8ihr6a6gryq.cloudfront.net/jun_10y_us/{z}/{x}/{y}.png"

        res = requests.get(url)


if __name__ == "__main__":
    main()
