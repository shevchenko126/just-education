# Generated by Django 4.0.5 on 2022-06-30 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_teacher'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2, null=True, verbose_name='рейтинг'),
        ),
    ]
