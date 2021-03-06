# Generated by Django 4.0.5 on 2022-07-01 10:04

import courses.inc.rating
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_teacher_rating'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name': 'студент', 'verbose_name_plural': 'студенти'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name': 'вчитель', 'verbose_name_plural': 'вчителя'},
        ),
        migrations.AlterField(
            model_name='teacher',
            name='rating',
            field=courses.inc.rating.RatingField(blank=True, decimal_places=0, max_digits=1, null=True, verbose_name='рейтинг'),
        ),
    ]
