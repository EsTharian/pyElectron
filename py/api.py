from __future__ import print_function
from calc import calc as real_calc
import zerorpc


class CalcApi(object):
    @staticmethod
    def calc(text):
        """based on the input text, return the int result"""
        try:
            return real_calc(text)
        except Exception as e:
            return 0.0

    @staticmethod
    def echo(text):
        """echo any text"""
        return text


def parse_port():
    return 4242


def main():
    addr = 'tcp://127.0.0.1:' + str(parse_port())
    s = zerorpc.Server(CalcApi())
    s.bind(addr)
    print('start running on {}'.format(addr))
    s.run()


if __name__ == '__main__':
    print("python api started")
    main()
