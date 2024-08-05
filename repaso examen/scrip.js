# Leer el valor de N
N = int(input("Introduce el número de valores que quieres sumar: "))

# Inicializar la suma
suma = 0

# Leer y sumar N números
for i in range(N):
    numero = float(input(f"Introduce el número {i+1}: "))
    suma += numero

# Mostrar el resultado
print(f"La suma de los {N} números es: {suma}")