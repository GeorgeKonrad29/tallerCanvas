import threading
#import time

class MyThread(threading.Thread):
    def __init__(self,numero):
        super(MyThread, self).__init__()
        self.suma=0
        self.x = numero
        

    def run(self):
        for i in range(self.x,self.x + 10):
            self.suma += i+1


if __name__ == "__main__":
    mensaje = "Hola, soy un hilo {}"
    threads = []
    for i in range(10):
        t = MyThread(i*10)
        t.start()
        threads.append(t)

    sumatotal=0
    for t in threads:
        sumatotal += t.suma
    print(sumatotal)