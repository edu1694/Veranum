from django.shortcuts import redirect, render
from .forms import ContactoForms, CustomUserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login
# Create your views here.


def home(request):
    return render(request, 'app/home.html')


def reservas(request):
    return render(request, 'app/reserva.html')


def recomendaciones(request):
    return render(request, 'app/recomendaciones.html')


def recepcionista(request):
    return render(request, 'app/recepcionista.html')


def habitaciones(request):
    return render(request, 'app/habitaciones.html')


def contacto(request):
    data = {
        'form': ContactoForms()
    }
    if request.method == 'POST':
        formulario = ContactoForms(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            messages.success(request, "Enviado correctamente")
        else:
            data["form"] = formulario

    return render(request, 'app/contacto.html', data)

def registro(request):
    data={
        'form':CustomUserCreationForm()
    }
    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            user = authenticate(username=formulario.cleaned_data["username"],password=formulario.cleaned_data["password1"])
            login(request, user)
            messages.success(request, "Te has registrado correctamnete")
            return redirect(to="home")
        else:
            data["form"] = formulario
    
    return render(request, 'registration/registro.html', data)
