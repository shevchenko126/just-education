# Generated by Django 4.0.5 on 2022-06-30 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2, null=True, verbose_name='рейтинг'),
        ),
    ]
