public class main{
    public static void main (String[] args) {
        carro miCarro = new carro();
        miCarro.agregarPuerta();
        System.out.println(miCarro.puertas);
}

class carro {
    public int puertas = 0;

    public void agregarPuerta(){
        this.brazos++;
    }
}
}