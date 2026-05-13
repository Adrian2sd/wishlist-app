import requests
import random

URL = "http://localhost:3001/api/v1/items"

nombres = [
    "Auriculares Bluetooth", "Teclado mecánico", "Monitor 4K", "Silla ergonómica",
    "Mouse inalámbrico", "Webcam HD", "Hub USB-C", "Alfombrilla gaming",
    "Cámara instantánea", "Tableta gráfica", "Smartwatch", "Lámpara LED",
    "Mochila portátil", "Cargador solar", "Auriculares ANC", "Micrófono condensador",
    "Libro de React", "Zapatillas running", "Cafetera espresso", "Organizador escritorio"
]

descripciones = [
    "Perfecto para uso diario", "Excelente relación calidad-precio",
    "Diseño moderno y funcional", "Ideal para regalar", "Alta durabilidad",
    "Compacto y ligero", "Con garantía oficial", "Edición limitada"
]

categorias = ["Electrónica", "Hogar", "Oficina", "Deporte", "Fotografía", "Música", "Libros"]

prioridades = ["alta", "media", "baja"]

def generar_producto():
    return {
        "name": random.choice(nombres),
        "description": random.choice(descripciones),
        "price": round(random.uniform(5.0, 300.0), 2),
        "link": f"https://example.com/product/{random.randint(1000,9999)}",
        "priority": random.choice(prioridades),
        "category": random.choice(categorias)
    }

if __name__ == "__main__":
    cantidad = 12  # Puedes cambiar este número

    print(f"⏳ Añadiendo {cantidad} productos aleatorios...")

    for i in range(cantidad):
        producto = generar_producto()
        try:
            response = requests.post(URL, json=producto)
            if response.status_code == 201:
                print(f"  ✅ Producto {i+1} creado: {producto['name']}")
            else:
                print(f"  ❌ Error al crear producto {i+1}: {response.status_code}")
        except requests.exceptions.ConnectionError:
            print("  ❌ No se pudo conectar con el servidor. ¿Está corriendo el backend en http://localhost:3001?")
            break

    print("🏁 Proceso terminado.")