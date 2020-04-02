---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: ""
date: {{ dateFormat "2006-01-02" .Date }}
slug: {{ .Name | urlize }}
tags: []
draft: true
---
