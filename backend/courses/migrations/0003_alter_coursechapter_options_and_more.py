# Generated by Django 4.0.5 on 2022-06-30 20:18

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('courses', '0002_coursechapter_alter_course_author_courselecture_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='coursechapter',
            options={'verbose_name': 'Розділ курсу', 'verbose_name_plural': 'Розділи курсів'},
        ),
        migrations.AlterModelOptions(
            name='courselecture',
            options={'verbose_name': 'Лекція курсу', 'verbose_name_plural': 'Лекції курсів'},
        ),
        migrations.RenameField(
            model_name='coursechapter',
            old_name='title',
            new_name='chapter_title',
        ),
        migrations.RenameField(
            model_name='courselecture',
            old_name='title',
            new_name='lecture_title',
        ),
        migrations.AlterField(
            model_name='course',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Автор'),
        ),
        migrations.AlterField(
            model_name='coursechapter',
            name='course',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='course_chapters', to='courses.course', verbose_name='Курс'),
        ),
        migrations.AlterField(
            model_name='coursechapter',
            name='duration',
            field=models.DurationField(blank=True, default=datetime.timedelta(days=1), help_text='(дні год:хв:сек)', verbose_name='Тривалість'),
        ),
        migrations.AlterField(
            model_name='courselecture',
            name='course_chapter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='course_lectures', to='courses.coursechapter', verbose_name='Розділ курсу'),
        ),
        migrations.AlterField(
            model_name='courselecture',
            name='duration',
            field=models.DurationField(blank=True, default=datetime.timedelta(seconds=1500), help_text='(дні год:хв:сек)', null=True, verbose_name='Тривалість'),
        ),
    ]
