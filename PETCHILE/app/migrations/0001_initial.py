# Generated by Django 4.0.5 on 2022-06-09 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contactos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('correo', models.EmailField(max_length=254)),
                ('tipo_consulta', models.IntegerField(choices=[[0, 'Consulta'], [1, 'Reclamo'], [2, 'Sugerencia'], [3, 'Agradeciomiento']])),
                ('mensajes', models.TextField()),
                ('aviso', models.BooleanField()),
            ],
        ),
    ]