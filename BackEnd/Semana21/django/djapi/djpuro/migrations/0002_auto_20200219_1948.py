# Generated by Django 3.0 on 2020-02-20 00:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djpuro', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='categoriamodel',
            old_name='descripcion',
            new_name='nueva_descripcion',
        ),
    ]
