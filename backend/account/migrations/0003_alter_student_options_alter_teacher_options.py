# Generated by Django 4.0.5 on 2022-07-01 04:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_teacher'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name': 'Студент', 'verbose_name_plural': 'Студенти'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name': 'Викладач', 'verbose_name_plural': 'Викладачі'},
        ),
    ]
