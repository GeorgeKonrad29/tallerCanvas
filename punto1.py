import threading
#import time

class MyThread(threading.Thread):
    def __init__(self,potenciaActualN,numeroPotenciasDeseadasN):
        super(MyThread, self).__init__()
        self.suma=0
        self.potenciaActual = potenciaActualN
        self.numeroPotenciasDeseadas= numeroPotenciasDeseadasN

    def potenciasConsecutivas(self):
        for i in range(self.numeroPotenciasDeseadas):
            self.suma += pow(2,self.potenciaActual+i)
        

    def run(self):
        self.potenciasConsecutivas()


if __name__ == "__main__":
    
    threads = []
    for i in range(5):
        numeroPotenciasDeseadas= 2
        t = MyThread(i*2+1,numeroPotenciasDeseadas)
        t.start()
        threads.append(t)

    sumatotal=0
    for t in threads:
        sumatotal += t.suma
        print(t.suma)
    print(sumatotal)