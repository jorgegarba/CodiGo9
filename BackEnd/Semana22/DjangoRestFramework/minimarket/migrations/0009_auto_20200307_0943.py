# Generated by Django 3.0 on 2020-03-07 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('minimarket', '0008_auto_20200307_0926'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='um_id',
            field=models.ForeignKey(db_column='um_id', on_delete=django.db.models.deletion.PROTECT, related_name='productos', to='minimarket.UnidadMedida'),
        ),
    ]
