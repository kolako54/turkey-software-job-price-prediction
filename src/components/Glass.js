import './Glass.css'
import { useState } from 'react'
import axios from 'axios'

function Glass() {
  function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }
  let skillset = ['Php', 'React', '.Net',
    'Java, JavaScript | Html | Css, React, React Native',
    '.Net, JavaScript | Html | Css', 'Python, Kotlin, React Native',
    'Php, JavaScript | Html | Css',
    'Php, Go, JavaScript | Html | Css, Vue', 'Swift / Objective C',
    'JavaScript | Html | Css, React, Vue, Express.js',
    'JavaScript | Html | Css, Vue', 'Java', 'Go', '.Net, Php, Vue',
    'C / C++', 'JavaScript | Html | Css', 'Node JS',
    '.Net, Vue, Angular, Flutter',
    '.Net, JavaScript | Html | Css, React, Angular', '.Net, Angular',
    '.Net, Flutter', 'Php, React, Angular',
    '.Net, JavaScript | Html | Css, React',
    'Java, .Net, Python, JavaScript | Html | Css, React, Angular',
    'Lowcode platformlar servicenow,pega', 'Python',
    'Java, .Net, Python, JavaScript | Html | Css',
    'Java, JavaScript | Html | Css', 'Angular',
    '.Net, Go, JavaScript | Html | Css', '.Net, Python, Angular',
    'Unity', 'JavaScript | Html | Css, React',
    'Php, JavaScript | Html | Css, Flutter',
    'JavaScript | Html | Css, React, Vue',
    'Java, .Net, JavaScript | Html | Css',
    'Php, JavaScript | Html | Css, Vue', 'Node.js',
    'Php, Go, JavaScript | Html | Css, Vue, Angular', 'Kotlin',
    'Php, Flutter', 'Java, React',
    'Php, JavaScript | Html | Css, React, Vue', 'Java, .Net',
    'Unity, C#', 'sap abap', 'Java, Python', 'UiPath', 'React, Nodejs',
    'Java, Kotlin', '.Net, JavaScript | Html | Css, Jquery',
    'Go, Vue, Flutter', 'Ruby', 'Go, Python', 'Flutter', 'Java, Vue',
    'Php, Perl', 'Postman/SoapUı',
    'Java, .Net, JavaScript | Html | Css, React',
    'JavaScript | Html | Css, React, Angular',
    'Java, .Net, Php, Go, Ruby, Kotlin, Swift / Objective C, JavaScript | Html | Css, Flutter, React Native',
    'Java, Python, JavaScript | Html | Css, React', '.Net, Vue',
    'Java, Go, Python',
    'Php, Go, Python, Swift / Objective C, JavaScript | Html | Css, React, Vue, React Native',
    '.Net, JavaScript | Html | Css, React, React Native',
    '.Net, Vue, Angular', 'Java, Kotlin, Swift / Objective C, React',
    '.Net, Node js', 'Php, React',
    'JavaScript | Html | Css, Vue, Flutter',
    'Kotlin, JavaScript | Html | Css', 'Swift / Objective C, Flutter',
    'JavaScript | Html | Css, React, Vue, React Native',
    'Yazılım geliştirmiyorum',
    '.Net, JavaScript | Html | Css, Angularjs,c#',
    'Java, Kotlin, Swift / Objective C',
    'JavaScript | Html | Css, React, Nest.js',
    '.Net, Go, JavaScript | Html | Css, React, Angular', 'Python, SQL',
    'Delphi', 'Java, Go', 'Python, Ruby', 'React, React Native',
    'Php, JavaScript | Html | Css, Angular',
    'Java, .Net, Php, Python, Swift / Objective C, C / C++, JavaScript | Html | Css, React, Vue, Angular, React Native',
    'Java, .Net, Php, Go, Python, React, Angular, React Native, Unreal',
    'Java, Quick', '.Net, JavaScript | Html | Css, Angular, Delphi',
    '.Net, Go', 'React Native', 'React, Vue',
    '.Net, JavaScript | Html | Css, Vue, Angular',
    '.Net, JavaScript | Html | Css, React, Vue, Angular',
    '.Net, JavaScript | Html | Css, Vue',
    'JavaScript | Html | Css, Angular',
    '.Net, Php, C / C++, JavaScript | Html | Css', 'Python, React',
    '.Net, JavaScript | Html | Css, Angular', '.Net, C / C++',
    'Go, Python, Vue', 'Python, C / C++',
    'Ruby, JavaScript | Html | Css, React',
    'Python, JavaScript | Html | Css, React', 'Java, .Net, C / C++',
    'Python, JavaScript | Html | Css, Jinja, Jquery',
    'Java, .Net, JavaScript | Html | Css, Vue, Angular',
    'JavaScript | Html | Css, Node.js', 'Oracle Apex / PL/SQL',
    'Php, Go, JavaScript | Html | Css, Vue, Flutter', 'Swift',
    '.Net, C / C++, JavaScript | Html | Css, React', '.Net, React',
    'JavaScript | Html | Css, React Native', 'Java, React, Angular',
    'Java, Php, JavaScript | Html | Css, Vue',
    'Java, .Net, Go, Kotlin', 'Vue', 'React, NodeJS',
    'Java, Php, Go, Python, JavaScript | Html | Css, React Native',
    'Java, Swift / Objective C, node', '.Net, Unity', '.Net, PL-SQL ',
    '.Net, Php, JavaScript | Html | Css', '.Net, Php',
    'Kotlin, Swift / Objective C', 'Sql',
    '.Net, Php, JavaScript | Html | Css, Angular, nodejs', 'SQL',
    'JavaScript | Html | Css, Razor',
    'Java, Php, Python, JavaScript | Html | Css, React', 'Java, Unity',
    'Java, .Net, Php, Go, Python', 'React, Vue, Angular',
    '.Net, JavaScript | Html | Css, React Native',
    'JavaScript | Html | Css, React, Node.js',
    'gitlab ci,docker,openstack,grafana,Prometheus,',
    'Java, C / C++, JavaScript | Html | Css, Angular',
    '.Net, React, React Native',
    'JavaScript | Html | Css, React, React Native',
    '.Net, JavaScript | Html | Css, React, Vue, Angular, Flutter, React Native',
    '.Net, Python', '.Net, JavaScript | Html | Css, Flutter',
    '.Net, Go, JavaScript | Html | Css, React',
    'Java, JavaScript | Html | Css, React', 'Go, Nodejs',
    'Java, Kotlin, Flutter', 'Java, Plsql',
    'Java, Python, C / C++, JavaScript | Html | Css, React, Angular',
    'Java, PL/SQL', 'Jira & confluence',
    'Java, Php, Kotlin, Swift / Objective C',
    'Java, JavaScript | Html | Css, Angular', 'Oracle PL/SQL',
    'Php, JavaScript | Html | Css, React', 'Java, React, React Native',
    '.Net, Kotlin, JavaScript | Html | Css, Vue, Angular',
    '.Net, C / C++, Unity', '.Net, Python, React, Vue, Angular',
    'Java, .Net, Go, Python, Vue', 'Java, Angular', 'It',
    '.Net, React, Angular', 'Java, .Net, Apache, big data',
    '.Net, Python, C / C++', 'Swift / Objective C, React Native',
    'Java, C / C++', 'Java, .Net, JavaScript | Html | Css, Bootstrap ',
    'Python, React, Vue, Angular, React Native', 'Typescript',
    '.Net, JavaScript | Html | Css, React, Vue', 'ABAP',
    'Java, .Net, Php, Python', 'Php, Go, React, Vue, Flutter',
    'React, Vue, React Native', 'Java, JavaScript | Html | Css, Vue',
    'Php, Nodejs', 'Java, .Net, Python, C / C++, Unity',
    '.Net, Python, JavaScript | Html | Css, Vue',
    'Java, Kotlin, Swift / Objective C, Flutter',
    'Swift / Objective C, JavaScript | Html | Css, React, Angular, Flutter, React Native, Unity',
    'Python, JavaScript | Html | Css', 'Python, Vue',
    'Java, JavaScript | Html | Css, React Native',
    '.Net, Go, C / C++, JavaScript | Html | Css, Vue, Angular',
    'Java, Php, Python, JavaScript | Html | Css, Nodejs', 'Oracle',
    'Java, Kotlin, C / C++',
    'JavaScript | Html | Css, Flutter, React Native',
    'Java, Php, JavaScript | Html | Css, React, Yoğunluklu js frameworks ',
    'Java, .Net, Kotlin, Swift / Objective C, JavaScript | Html | Css',
    '.Net, C / C++, JavaScript | Html | Css, Vue',
    'Java, React, Plsql', 'Java, .Net, React',
    'Java, JavaScript | Html | Css, Cobol ', 'Java, Go, Kotlin',
    '.Net, Vue, Flutter', 'Plsql ',
    'Java, Php, Kotlin, JavaScript | Html | Css',
    '.Net, JavaScript | Html | Css, Unity', 'Java, Go, Python, Kotlin',
    'Java, Go, JavaScript | Html | Css, React, React Native',
    'Python, Django', 'Python, TensorFlow ',
    'Java, Php, Go, Python, Kotlin, JavaScript | Html | Css, React',
    'Php, Python, Ruby, JavaScript | Html | Css, Angular',
    'Java, .Net, Python, Kotlin, C / C++, JavaScript | Html | Css, Angular, Flutter',
    'Java, .Net, Kotlin, Swift / Objective C', 'Scala',
    '.Net, Selenium', 'Kotlin, Swift / Objective C, Flutter',
    'Kotlin, C / C++', 'React, Vue, Angular, Twig ',
    'Php, JavaScript | Html | Css, React, Vue, React Native',
    '.Net, Python, Ruby, C / C++, JavaScript | Html | Css, React, Vue',
    '.Net, Python, React',
    'Python, JavaScript | Html | Css, React, Vue',
    'Php, Go, Python, JavaScript | Html | Css',
    'Java, Kotlin, Swift / Objective C, JavaScript | Html | Css, React, Flutter',
    'Go, C / C++, Unreal', 'Vue, Angular, Flutter, React Native',
    'Php, JavaScript | Html | Css, React, Mysql',
    'Java, .Net, Go, Kotlin, React, Vue', '.Net, Kotlin',
    '.Net, Python, JavaScript | Html | Css, React', 'C / C++, Unreal',
    'Php, Go, Python, React, Vue, Angular', '.Net, React, Flutter',
    '.Net, Go, Python', 'Sadece yazılım destek',
    'Java, .Net, Php, JavaScript | Html | Css, Vue, Angular',
    '.Net, React, React Native, Unity',
    '.Net, C / C++, JavaScript | Html | Css, React, Angular',
    'NodeJs,NestJs', 'Java, PL/SQL PRO C', 'Python, Tableau ',
    '.Net, Dart', 'JavaScript | Html | Css, React, TypeScript',
    '.Net, Php, Angular',
    'Php, JavaScript | Html | Css, Flutter, Troia',
    'Java, Php, Python, Angular', 'Kotlin, Flutter',
    'Java, JavaScript | Html | Css, Jsf',
    'Java, Kotlin, JavaScript | Html | Css', 'Vue, Flutter',
    '.Net, C / C++, React',
    '.Net, Python, JavaScript | Html | Css, Vue, Flutter',
    'Python, Bash', '.Net, NodeJs', 'Php, Go',
    'JavaScript | Html | Css, Angular, Node.js', '.Net, Sql',
    'Java, JavaScript | Html | Css, React, Angular',
    'Java, Go, JavaScript | Html | Css',
    'JavaScript | Html | Css, React, Node ', 'Java, .Net, Kotlin',
    '.Net, Delphi', 'Sap', 'Java, Swift / Objective C',
    '.Net, Xamarin',
    'Php, Python, JavaScript | Html | Css, React, Vue, Angular',
    '.Net, Visual basic', '.Net, JavaScript | Html | Css, Abap',
    'React, Angular', '.Net, Go, Angular',
    'Java, Python, Swift / Objective C, JavaScript | Html | Css',
    'Network tools', '.Net, Winform', 'Java, .Net, JavaFx',
    'Java, React Native',
    'Php, Go, JavaScript | Html | Css, Vue, Flutter, React Native',
    'React Native, Delphi', 'Nodejs', 'Elixir',
    'Java, Php, Go, JavaScript | Html | Css, Vue', 'Java, Sql, unix',
    'Python, Shell script', 'Python, JavaScript | Html | Css, Vue',
    'Devops araçları: docker terraform ansible kubrrnetes',
    'Java, .Net, Swift / Objective C', 'Flutter, Plsql',
    '.Net, JavaScript | Html | Css, ABAP, FIORI UI5', 'Php, Python',
    'Java, Python, Kotlin', '.Net, React, Vue, Angular, Flutter',
    'Java, Go, React',
    '.Net, JavaScript | Html | Css, React, Vue, Angular, Flutter',
    'JavaScript | Html | Css, React, Vue, Angular',
    '.Net, Swift / Objective C, Flutter, Unity', 'Soa',
    'Swift / Objective C, C / C++', '.Net, Go, Vue',
    '.Net, JavaScript | Html | Css, Angular, Flutter',
    'Php, Go, JavaScript | Html | Css, React', 'Python, Angular',
    'Php, Python, JavaScript | Html | Css, React, Vue, React Native',
    'Php, Go, React, Vue',
    '.Net, JavaScript | Html | Css, Visual Basic',
    'Java, Python, React',
    'Java, Kotlin, Swift / Objective C, Vue, Angular, Flutter, Unity',
    'Java, Php, Python, Swift / Objective C, C / C++, JavaScript | Html | Css',
    'JavaScript | Html | Css, Node',
    'Php, Python, JavaScript | Html | Css, React',
    '.Net, Php, JavaScript | Html | Css, React',
    'Java, JavaScript | Html | Css, Hybris',
    'Java, Php, JavaScript | Html | Css, Angular', 'Java, .Net, Php',
    'Python, C / C++, JavaScript | Html | Css, React',
    'Python, Kotlin, Swift / Objective C',
    'JavaScript | Html | Css, ABAP',
    'Ruby, JavaScript | Html | Css, Vue',
    'Php, Python, JavaScript | Html | Css', 'Java, Angular, Flutter',
    '.Net, Nodejs',
    'Swift / Objective C, JavaScript | Html | Css, React, Flutter',
    'Go, Python, JavaScript | Html | Css', 'CS',
    'Java, .Net, C / C++, React', 'Swift / Objective C, Angular',
    'Selenium', 'JavaScript | Html | Css, Vue, Node , TS',
    'Java, .Net, JavaScript | Html | Css, React, Angular',
    'Java, .Net, Php, Swift / Objective C, JavaScript | Html | Css, Flutter',
    'Java, Python, Angular', 'JavaScript | Html | Css, Nodejs',
    'Python, BASH',
    '.Net, Php, JavaScript | Html | Css, React, React Native', 'Abap',
    'C#', 'Ms Project, jira', 'Python, R, Matlab',
    'Java, Flutter, React Native', 'C / C++, Unity, Unreal',
    'Java, .Net, Php, JavaScript | Html | Css, React, Vue',
    'Java, .Net, C / C++, JavaScript | Html | Css, Angular',
    'Java, .Net, C / C++, Csharp', '.Net, Go, Kotlin',
    'Php, Go, Python, Swift / Objective C, JavaScript | Html | Css, React',
    '.Net, Kotlin, Angular', 'Abap fiori',
    'Java, .Net, Go, Kotlin, React',
    '.Net, JavaScript | Html | Css, C#   , Blazor ',
    'C / C++, JavaScript | Html | Css', 'Unity, Unreal',
    'Java, .Net, Swift / Objective C, C / C++, JavaScript | Html | Css, Flutter',
    '.Net, Php, JavaScript | Html | Css, Vue, Flutter',
    'Java, .Net, Swift / Objective C, Vue, React Native',
    'JavaScript | Html | Css, React, GraphQL, NodeJs',
    '.Net, Go, node js', 'Python, Sql',
    'JavaScript | Html | Css, Vue, Nuxt.js',
    'Java, .Net, JavaScript | Html | Css, React, React Native',
    'Php, Go, Python, C / C++', 'SQL, QLIK', 'Java, Php, Go, Python',
    'Bash', 'Java, SQL', 'Java, Go, JavaScript | Html | Css, React',
    '.Net, JavaScript | Html | Css, Angular, DevExtreme',
    'JavaScript | Html | Css, React, Angular, nodejs', 'Ansible, bash',
    'Php, Python, Vue, Angular', '.Net, Python, React, Angular',
    'Php, JavaScript | Html | Css, Vue, Flutter', 'Visual Basic',
    'Php, JavaScript | Html | Css, React, Vue, nodejs',
    '.Net, Python, JavaScript | Html | Css',
    'JavaScript | Html | Css, Troia, sql',
    'Php, JavaScript | Html | Css, React, Vue, Angular, React Native',
    'Java, .Net, Vue, Angular',
    'Java, .Net, Python, C / C++, JavaScript | Html | Css, React Native',
    '.Net, Ruby, C / C++, JavaScript | Html | Css, Angular',
    'JavaScript | Html | Css, Rust',
    '.Net, JavaScript | Html | Css, React, Angular, Flutter',
    '.Net, Oracle forms,reports',
    'Php, JavaScript | Html | Css, React, React Native',
    'Java, .Net, JavaScript | Html | Css, Angular',
    '.Net, JavaScript | Html | Css, Vue, Flutter',
    '.Net, Php, JavaScript | Html | Css, Vue',
    'JavaScript | Html | Css, React, Angular, React Native',
    'Python, R, SQL, SSAS, SSRS, SSIS, Azure Cloud',
    'Python, C / C++, JavaScript | Html | Css',
    'Java, Kotlin, Swift / Objective C, React Native',
    'JavaScript | Html | Css, React, React Native, Nodejs',
    'Java, Php',
    'Java, Go, Python, JavaScript | Html | Css, React, React Native',
    'Go, Python, C / C++', 'R + Power BI', 'NodeJS / TypeScript',
    '.Net, Kotlin, React', 'JavaScript | Html | Css, Coldfusion ',
    'Java, .Net, Python, C / C++, React, React Native, Unreal',
    'Go, Swift / Objective C',
    'Java, .Net, Php, Python, C / C++, JavaScript | Html | Css',
    'Php, Go, Python', 'Java, Php, Python', 'C / C++, matlab',
    'Jdeveloper',
    'Java, .Net, Go, Python, C / C++, JavaScript | Html | Css, Angular, Flutter',
    'Php, JavaScript | Html | Css, Laravel codeigniter bootsrap jquery',
    'JavaScript | Html | Css, React, Vue, Angular, Flutter', 'Linux',
    'Java, .Net, JavaScript | Html | Css, Mssql',
    'Python, C / C++, JavaScript | Html | Css, React, Bash',
    'Python, React, Angular', 'Python, Kotlin', '.Net, Python, Kotlin',
    'Java, Python, JavaScript | Html | Css, React, React Native',
    'React, Vue, Angular, React Native',
    '.Net, JavaScript | Html | Css, Angular, React Native',
    'Java, Python, Scala',
    'Java, .Net, JavaScript | Html | Css, Vue, Angular, Flutter',
    'SQL ', 'Python, R',
    'Php, Python, C / C++, JavaScript | Html | Css',
    '.Net, Angular, Flutter', 'Java, Php, Go', 'Python, React Native',
    'JavaScript | Html | Css, Flutter', 'Go, Vue',
    'Java, Php, JavaScript | Html | Css, React, Angular',
    'Php, Go, Python, Vue', 'Java, .Net, Python, C / C++, Angular',
    '.Net, JavaScript | Html | Css, Flutter, ABAP',
    'T-SQL,SSIS,SSAS,SSRS,Tableau',
    'Java, .Net, Php, Go, Python, Ruby, React',
    'JavaScript | Html | Css, pl/sql, oracle apex',
    '.Net, 1C Enterprise ', 'React Native, NodeJS', 'Ladder diagram',
    'Java, Cobol ', 'Java, .Net, C / C++, Angular',
    'Java, .Net, JavaScript | Html | Css, Angular, Unity',
    'Java, .Net, React, Angular',
    'Java, .Net, Python, JavaScript | Html | Css, React, Flutter',
    'React, Flutter, React Native', 'sql', 'C / C++, Nginx ',
    '.Net, C / C++, Pl/sql', 'Java, Go, Python, React',
    '.Net, Go, JavaScript | Html | Css, Typescript', 'Python, bash',
    'Php, JavaScript | Html | Css, React Native', 'Php, Vue',
    'Ruby, JavaScript | Html | Css, React, React Native', 'Test',
    'JavaScript | Html | Css, Pl-sql',
    'Php, Go, JavaScript | Html | Css, Angular',
    'JavaScript | Html | Css, node',
    'Java, Kotlin, Swift / Objective C, C / C++', 'Go, React', 'VB6.0',
    'Kotlin, Godot', '.Net, JavaScript | Html | Css, JQuery',
    'Swift / Objective C, Unity', 'Python, Swift / Objective C',
    '.Net, C / C++, Angular',
    'Go, JavaScript | Html | Css, React, Vue, Angular',
    '.Net, React, Vue, Angular', 'Php, React, React Native',
    'Java, Swift / Objective C, JavaScript | Html | Css, React',
    'Go, C / C++, Flutter',
    'Java, .Net, JavaScript | Html | Css, React, Flutter',
    'C / C++, Qt', '.Net, Python, Delphi',
    '.Net, Php, Python, Angular',
    'Java, .Net, Swift / Objective C, JavaScript | Html | Css',
    'Ruby, Angular', 'Vue, Angular',
    '.Net, C / C++, JavaScript | Html | Css',
    'Java, .Net, Php, Python, C / C++, JavaScript | Html | Css, React, Angular, Flutter, Unity',
    'Java, C / C++, React', '.Net, Go, Node.js',
    '.Net, Go, Kotlin, Swift / Objective C, JavaScript | Html | Css',
    'Flutter, g',
    'Java, Python, C / C++, JavaScript | Html | Css, React',
    '.Net, React, Unity', 'Java, Go, Kotlin, Swift / Objective C',
    'Go, Python, C / C++, JavaScript | Html | Css, React',
    'Java, Php, Python, React, Vue, Angular',
    'Go, JavaScript | Html | Css, React',
    'Php, Python, JavaScript | Html | Css, React, Angular',
    '.Net, Typescript',
    'Python, JavaScript | Html | Css, React, React Native',
    'JavaScript | Html | Css, React, Next', 'C / C++, C#/.Net',
    'Java, Go, Kotlin, JavaScript | Html | Css, React, Angular',
    'Java, Php, Python, Kotlin, Swift / Objective C, JavaScript | Html | Css, React, Vue, React Native',
    'Java, JavaScript | Html | Css, NodeJs, typescript',
    'Java, Php, Vue', 'Python, JavaScript | Html | Css, Vue, Angular',
    'Java, JavaScript | Html | Css, Cobol',
    'Java, .Net, Python, Swift / Objective C, JavaScript | Html | Css',
    '.Net, Powershell', 'Java, .Net, Python, Kotlin',
    '.Net, Swift / Objective C, React, Flutter, React Native',
    'NodeJs',
    'Java, .Net, Php, Swift / Objective C, JavaScript | Html | Css, Angular',
    'Python, SPSS Modeler', 'Java, Python, C / C++, Matlab, octave',
    '.Net, Kotlin, Swift / Objective C, JavaScript | Html | Css, React, React Native',
    '.Net, React Native',
    'Java, .Net, Php, Go, Python, Swift / Objective C, C / C++',
    'Php, Oracle apex pl sql', 'Java, .Net, Python', 'İbm egl',
    'Java, .Net, Vue, Angular, Flutter',
    '.Net, Php, Python, JavaScript | Html | Css, React',
    'JavaScript | Html | Css, Vue, Node.js',
    '.Net, JavaScript | Html | Css, React, R',
    '.Net, Php, React, Angular, React Native', '.Net, pentaho, knime',
    '.Net, Python, Vue, Angular', 'Java, .Net, Kotlin, xamarin',
    'cobol , pli, CA Gen',
    'JavaScript | Html | Css, React, Angular, SharePoint',
    'Java, Php, React, Angular, React Native',
    'Java, JavaScript | Html | Css, litElement',
    '.Net, JavaScript | Html | Css, Angular, Sap',
    'Java, .Net, Php, JavaScript | Html | Css, Angular',
    'Java, .Net, Php, Go, JavaScript | Html | Css',
    'Java, Python, C / C++, Unity', 'Java, Go, Kotlin, Vue',
    'Python, Automation Anywhere', 'Java, Go, React, Solidity',
    'Java, Go, React Native',
    'Java, .Net, Kotlin, Swift / Objective C, JavaScript | Html | Css, Flutter',
    'Java, Cobol', 'Java, nodeJs',
    'Java, Go, Python, JavaScript | Html | Css, React, Vue, Angular',
    'Php, Go, JavaScript | Html | Css, React, Vue',
    '.Net, JavaScript | Html | Css, React, Node, ',
    '.Net, Ruby, JavaScript | Html | Css, React, Vue, Angular',
    'Java, .Net, Python, C / C++, JavaScript | Html | Css',
    'Java, .Net, Go, Kotlin, Vue', '.Net, React, Vue',
    'Java, C / C++, JavaScript | Html | Css, React',
    'Java, Python, JavaScript | Html | Css, React, Flutter',
    '.Net, dax',
    '.Net, JavaScript | Html | Css, React, Flutter, React Native',
    'C / C++, Unity', '.Net, Python, React, Vue, Flutter',
    'Java, Python, C / C++, JavaScript | Html | Css',
    '.Net, JavaScript | Html | Css, React, Vue, React Native',
    'Java, .Net, Php, Python, Angular', '.Net, delphi',
    'Java, Php, JavaScript | Html | Css',
    'Java, JavaScript | Html | Css, React, Scala', 'Ruby, React',
    'Java, Scala', 'Java, .Net, Angular',
    'JavaScript | Html | Css, abap', 'Java, Flutter', 'C / C++, PLSQL',
    'Php, C / C++, JavaScript | Html | Css, Angular', 'abap',
    '.Net, Php, C / C++, Vue', 'Python, SAS', 'Pega',
    'Java, .Net, Php, Go, JavaScript | Html | Css, React, Vue, Angular, Flutter',
    'Java, Go, Python, Swift / Objective C, JavaScript | Html | Css, React, React Native',
    'Php, JavaScript | Html | Css, React, Angular',
    '.Net, Php, Vue, Angular',
    'Java, Php, Python, JavaScript | Html | Css',
    '.Net, Go, JavaScript | Html | Css, React, Vue, Angular, React Native',
    'Node js', 'JavaScript | Html | Css, Abap, CDS, UI5',
    '.Net, Php, Python, C / C++, JavaScript | Html | Css, React, React Native',
    'Java, .Net, Flutter', 'Liquid', 'Java, Typescript/nestjs ',
    '.Net, Kotlin, Swift / Objective C, React, Flutter',
    'Java, Php, JavaScript | Html | Css, Vue, Flutter',
    'Java, .Net, Go, Kotlin, Angular', 'Java, .Net, Go',
    '.Net, JavaScript | Html | Css, React, Angular, React Native',
    'Python, React, React Native', '.Net, JavaScript | Html | Css, C#',
    'NodeJS', 'Java, .Net, JavaScript | Html | Css, Angular, Flutter',
    'Java, JavaScript | Html | Css, Angular, NodeJS', 'Architecture',
    'Go, JavaScript | Html | Css', 'Python, Apex', 'Plsql',
    'Php, Python, JavaScript | Html | Css, Vue',
    'Python, JavaScript | Html | Css, Angular',
    '.Net, Kotlin, Swift / Objective C', 'Python, Cloud, k8s, ',
    'Go, Python, React, Angular, React Native', 'TypeScript',
    'JavaScript | Html | Css, Abap', 'Python, Selenium', 'R',
    'Ruby, JavaScript | Html | Css, Ember',
    'Swift / Objective C, C / C++, JavaScript | Html | Css',
    'Php, JavaScript | Html | Css, Node.JS', '.Net, Python, Flutter',
    'JavaScript | Html | Css, React, Typescript', 'Go, Python, React',
    'Php, Ruby', 'Java, .Net, Go, Python, Kotlin, Unity',
    'JavaScript | Html | Css, NodeJS', '.Net, Matlab',
    'Php, Vue, Flutter', 'Go, Flutter', 'Rpgle', 'Java, Sql',
    '.Net, Go, React', 'C / C++, Flutter', 'Java, .Net, Python, Unity',
    'Php, Go, Python, JavaScript | Html | Css, React, Vue, React Native',
    'Java, JavaScript | Html | Css, Ember',
    'Java, .Net, Python, C / C++, React Native, Unity',
    'Go, Python, JavaScript | Html | Css, React', 'Abap ',
    'JavaScript | Html | Css, Angular, React Native',
    'Php, Python, Kotlin, Swift / Objective C, JavaScript | Html | Css, React, Vue, Angular, Flutter, React Native',
    'Java, Php, Go, Python, Ruby, Swift / Objective C, C / C++, JavaScript | Html | Css, Flutter',
    'Java, .Net, JavaScript | Html | Css, Vue', '.Net, Progress',
    'Java, Python, React, React Native', '.Net, Kotlin, Unity',
    'Python, JavaScript | Html | Css, React, Vue, Angular, React Native',
    'Oracle Pl-Sql', 'Php, Magento', 'Postgresql',
    'Php, Go, JavaScript | Html | Css, React, React Native',
    'Java, Python, JavaScript | Html | Css',
    'Java, JavaScript | Html | Css, React, Vue',
    '.Net, Php, JavaScript | Html | Css, Blazor',
    'Jenkins, azure devops, GCP, AWS, Azure', 'SAP ABAP FIORI',
    '.Net, Data Management', 'Go, C / C++, JavaScript | Html | Css',
    'Java, Python, Selenium',
    '.Net, JavaScript | Html | Css, React, Vue, Angular, React Native',
    'Python, C / C++, Unity', '.Net, Node',
    'JavaScript | Html | Css, Wordpress Theme Development',
    'JavaScript | Html | Css, Vue, React Native, Svelte',
    'Java, JavaScript | Html | Css, React, Vue, Angular, React Native, node',
    'Farklı', '.Net, Go, React, Flutter, React Native',
    'Php, Python, React', 'Go, Python, Flutter',
    'Java, Python, C / C++', 'Java, Lowcode',
    '.Net, Kotlin, Swift / Objective C, JavaScript | Html | Css',
    'JavaScript | Html | Css, Angular, Cordova', 'Penetration Test',
    'Java, .Net, Php, Flutter',
    '.Net, Python, JavaScript | Html | Css, React, React Native', '.',
    'C / C++, UiPath',
    'Java, .Net, Python, Swift / Objective C, C / C++, React',
    'Java, .Net, React, Unity', '.Net, X++',
    'Php, Python, JavaScript | Html | Css, React, Vue, nodejs, ',
    'Java, .Net, Php, Python, Kotlin, JavaScript | Html | Css, React',
    'JavaScript | Html | Css, React, Flutter',
    'Python, Kotlin, Flutter', 'Java, backbone.js', 'Java, React, Vue',
    'JavaScript | Html | Css, React, Perl',
    '.Net, Go, Python, JavaScript | Html | Css, React, Rust, Elixir',
    'Php, Go, Python, JavaScript | Html | Css, React, Vue, Angular, DevOps&SRE',
    'Php, C / C++, React Native',
    'Java, Teknoloji degil ama db olarak postgresql',
    '.Net, Go, Python, JavaScript | Html | Css', 'Java, Bash, Ansible',
    'Java, React, Angular, Google lit elements',
    'Java, .Net, Python, JavaScript | Html | Css, Angular, Nginx içinde Lua',
    'Troia, SQL', 'Java, Python, JavaScript | Html | Css, Angular',
    'SAP', 'Java, JavaScript | Html | Css, Vue, Angular',
    'Php, Go, Python, Vue, Flutter',
    'Php, JavaScript | Html | Css, React, Flutter, React Native',
    'Pl/Sql,Ms/sql', 'Python, lua', '.Net, Pl1,jcl',
    '.Net, Angular, Abap', 'Java, Nodejs', 'SAP Abap',
    '.Net, Swift / Objective C, JavaScript | Html | Css',
    '.Net, Php, Python', 'Php, Angular, SQL',
    'Php, JavaScript | Html | Css, React, perl',
    'JavaScript | Html | Css, ABAP, UI5',
    'C / C++, JavaScript | Html | Css, Yocto',
    '.Net, Kotlin, JavaScript | Html | Css, React',
    'Go, Python, JavaScript | Html | Css, NodeJS',
    '.Net, Go, Python, JavaScript | Html | Css, Flutter',
    'React, Solidity', 'Java, JavaScript | Html | Css, Extjs',
    '.Net, Python, React, React Native',
    '.Net, JavaScript | Html | Css, React, Flutter',
    'Java, .Net, Php, Go, Kotlin, JavaScript | Html | Css, React, Vue, Angular, Flutter, React Native, Unity',
    'JavaScript | Html | Css, Vue, Unity, Php, Laravel',
    '.Net, Php, Go, Python, Kotlin, Swift / Objective C, JavaScript | Html | Css',
    'Java, .Net, JavaScript | Html | Css, React, Vue',
    'Angular, React Native', 'JavaScript | Html | Css, Vue, Angular',
    '.Net, JavaScript | Html | Css, Dynamics crm',
    'Java, Php, JavaScript | Html | Css, React, React Native',
    'Php, Go, React, Vue, Angular',
    '.Net, Python, Kotlin, JavaScript | Html | Css', 'Pl-sql Oracle',
    'Go, PC SOFT', 'Php, Cordova',
    'Python, JavaScript | Html | Css, Vue, Nodejs', 'TROIA',
    'C / C++, Unity, C#', '.Net, Flutter, React Native',
    'Php, Angular, Flutter',
    '.Net, Kotlin, Swift / Objective C, JavaScript | Html | Css, Vue',
    'T-SQL', 'Java, Go, Kotlin, React',
    'Java, Go, Python, JavaScript | Html | Css',
    '.Net, JavaScript | Html | Css, Angular, Nativescript',
    '.Net, Delphl',
    'Java, Go, Python, Ruby, Kotlin, Swift / Objective C, React, Flutter, React Native',
    'Angular, NestJS', '.Net, Python, Angular,  R',
    '.Net, JavaScript | Html | Css, React, PL/SQL',
    'Php, C / C++, Flutter', '.Net, Swift / Objective C',
    'JavaScript, TypeScript ', '.Net, Go, React, React Native',
    'Java, .Net, Kotlin, Swift / Objective C, JavaScript | Html | Css, Angular, Flutter',
    'Php, Go, JavaScript | Html | Css, React, Vue, React Native',
    'Java, Ember ', 'Php, Vue, Angular',
    'JavaScript | Html | Css, React, NestJs', 'Php, Go, Windev',
    '.Net, Python, Node.js',
    '.Net, Swift / Objective C, JavaScript | Html | Css, React Native',
    'Go, Python, C / C++, React', 'PL/SQL',
    '.Net, JavaScript | Html | Css, React, Angular, .Net Core, MongoDB',
    '.Net, Php, React, Vue, Angular, Flutter, React Native',
    'Java, .Net, Php, Python, JavaScript | Html | Css, Vue, Angular, Scala',
    'Python, C / C++, JavaScript | Html | Css, Vue',
    'JavaScript | Html | Css, Scala',
    'Php, Swift / Objective C, JavaScript | Html | Css, Vue, Unity',
    'Java, .Net, delphi', 'Python, Sql, Odi',
    'Php, Go, Kotlin, Swift / Objective C, JavaScript | Html | Css, Vue',
    'Java, .Net, C / C++, JavaScript | Html | Css, Unity',
    'Java, .Net, Python, JavaScript | Html | Css, React, React Native',
    '.Net, JavaScript | Html | Css, SAP, NodeJS',
    'Java, .Net, Python, C / C++, React, Unity',
    'Java, .Net, Python, C / C++',
    'Php, Python, JavaScript | Html | Css, React Native',
    'JavaScript | Html | Css, React, Flutter, NodeJs',
    '.Net, JavaScript | Html | Css, Cobol/pl1',
    'Java, JavaScript | Html | Css, React, Shell Script',
    '.Net, JavaScript | Html | Css, Oracle',
    '.Net, Swift / Objective C, JavaScript | Html | Css, React, Flutter, React Native',
    '.Net, React, Angular, React Native', 'Java, Php, Flutter',
    'JavaScript | Html | Css, Vue, NodeJS ',
    'Java, .Net, Python, Cobol',
    'Java, .Net, Kotlin, Vue, React Native', 'Abap developer',
    'Python, Spark', 'Java, .Net, Kotlin, React Native',
    'Java, Php, Kotlin, Swift / Objective C, Vue',
    'Java, .Net, Python, Kotlin, Swift / Objective C, JavaScript | Html | Css, Angular',
    'Java, .Net, Php, Kotlin, Swift / Objective C, JavaScript | Html | Css, Vue',
    'Manuel Test uzmanıyım',
    'JavaScript | Html | Css, Vue, Angular, Flutter',
    'Java, Kotlin, JavaScript | Html | Css, React, Angular, React Native',
    '.Net, JavaScript | Html | Css, React, TypeScript',
    '.Net, Node.js', 'Python, JavaScript | Html | Css, React, Angular',
    '.Net, JavaScript | Html | Css, Vue, React Native',
    'Php, JavaScript | Html | Css, React, Vue, Angular',
    'Python, Scripting language'].sort();
  skillset = removeFirst(skillset, ".")
  const [job, setjob] = useState('React');
  const [levels, setLevels] = useState('Middle')
  const [result, setResult] = useState('')

  const [positions, setPositions] = useState('Back-end Developer')
  const [experiences, setExperiences] = useState('3 - 5 Yıl')
  const [worktypes, setWorktypes] = useState('Remote')
  const [cities, setCities] = useState('İstanbul')
  const [level, setLevel] = useState(['Middle', 'Junior', 'Senior']);
  const [position, setPosition] = useState(['Back-end Developer', 'Front-end Developer',
  'Full Stack Developer', 'Mobile Application Developer',
  'Embedded Software Developer', 'Team / Tech Lead',
  'Game Developer', 'Data Scientist', 'Software Architect',
  'RPA Developer', 'Computer Vision Engineer',
  'QA / Test Automation Developer', 'Software Development Manager',
  'DevOps Engineer', 'Data Analyst', 'Data Engineer', 'CTO',
  'Machine Learning', 'Database Administrator', 'IT Specialist',
  'Project & Product Manager / PO', 'Consultant', 'R&D Engineer',
  'Support Engineer', 'Business Analyst', 'Seo Specialist',
  'SAP/ABAP/ERP Developer', 'SysAdmin', 'Security',
  'Blockchain Developer']);
  const [tech_stack, set_tech_stack] = useState(skillset);
  const [experience, set_experience] = useState(['3 - 5 Yıl', '0 - 1 Yıl', '1 - 3 Yıl', '5 - 7 Yıl', '7 - 10 Yıl',
    '10 - 14 Yıl', '15 Yıl ve üzeri']);

  const [work_type, set_work_type] = useState(['Hibrit (Ofis + Remote)', 'Remote',
    'Pandemi Nedeniyle; Geçici Olarak Hibrit (Ofis + Remote)',
    'Pandemi Nedeniyle; Geçici Olarak Remote', 'Ofis']);
  const [city, setCity] = useState(['İstanbul', 'Kocaeli', 'Ankara', 'Yurt Dışı', 'Kocaeli ', 'İzmir',
  'Gaziantep', 'Bolu', 'Kayseri ', 'Malatya', 'Antalya', 'Diğer',
  'Muğla', 'Eskişehir', 'Denizli', 'Çanakkale', 'Düzce', 'Edirne',
  'Bursa', 'Samsun', 'Hatay', 'Konya', 'Çorum', 'Antalya ',
  'Kırklareli ', 'Adana', 'Eskişehir ', 'Tokat', 'Kayseri',
  'Mersin ', 'Tekirdağ', 'Sakarya', 'Yalova', 'kocaeli', 'Şanlıurfa',
  'Anadolu', 'Trabzon', 'Mersin', 'Bandırma', 'Erzurum', 'Zonguldak',
  'Singapur', 'Manisa', 'Sakarya ', 'Kütahya', 'Kahramanmaraş',
  'Niğde', 'Aydın', 'ABD', 'kayseri', 'Ukrayna ', 'Ordu', 'Elazığ',
  'Kahramanmaraş ', 'Sivas', 'İzmit', 'elazığ', 'bursa', 'Edremit',
  'Zurich', 'hatay', 'Diyarbakır', 'Erzurum ', 'İsviçre', 'Uşak',
  'Şanlıurfa ', 'çorum', 'Kırşehir', 'texas', 'Gaziantep ',
  'antalya', 'Isparta', 'trabzon', 'Bayburt ', 'Dubai', 'aydin',
  'KKTC', 'MISIR', 'Karabük', 'Amasya', 'edirne', 'Eskisehir',
  'sakarya', 'Afyon', 'Erzincan', 'Siirt', 'ESKİŞEHİR', 'Kastamonu',
  'adana', 'Alanya ', 'DENİZLİ', 'Trabzon ', 'Tekirdağ ', 'Konya ',
  'Samsun '])

  const handleChangeLevels = (e) => {
    console.log(e.target.value)
    setLevels(e.target.value)
  }
  const handleChangePosition = (e) => {
    console.log(e.target.value);
    setPositions(e.target.value);
  }
  const handleChangeJob = (e) => {
    console.log(e.target.value)
    setjob(e.target.value)
  }
  const handleChangeExperience = (e) => {
    console.log(e.target.value)
    setExperiences(e.target.value)
  }
  const handleChangeWorktypes = (e) => {
    console.log(e.target.value)
    setWorktypes(e.target.value)
  }
  const handleChangeCities = (e) => {
    console.log(e.target.value)
    setCities(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const params = { gender, bsc, workex, etest_p: 50, msc }
    const params = { level: levels, tech_stack: job, experience: experiences, position: positions, work_type: worktypes, city: cities}
    console.log(params)

  //   axios
  //     .post('http://localhost:15999/prediction', params)
  //     .then((res) => {
  //       const data = res.data.data
  //       const parameters = JSON.stringify(params)
  //       const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
  //       alert(msg)
  //       reset()
  //     })
  //     .catch((error) => alert(`Error: ${error.message}`))
  // }
  console.log('res')
  axios
  .post('http://localhost:15555/prediction', params)
    .then((res) => {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    const data = res.data.data

    const parameters = JSON.stringify(params)
    // const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
    // alert(msg)
      setResult(data.prediction)

  })
  .catch((error) => alert(`Error: ${error.message}`))
}
  const lir = <p>Lir in month</p>
  const toman = <p>Toman in month</p>


  return (
    <div className="glass"  style={{fontFamily: 'Poppins'}}>
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <div className="glass__form__group">
          <label>Level:</label>
          <select onChange={handleChangeLevels}>
            {level.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>
        <div className="glass__form__group">
        <label>Position:</label>
          <select onChange={handleChangePosition}>
            {position.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>
        <div className="glass__form__group">
        <label>Tech stack:</label>
          <select onChange={handleChangeJob}>
            {tech_stack.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>
        <div className="glass__form__group">
        <label>Experience:</label>
          <select onChange={handleChangeExperience}>
            {experience.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>
        <div className="glass__form__group">
        <label>Work type:</label>
          <select onChange={handleChangeWorktypes}>
            {work_type.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>
        <div className="glass__form__group">
        <label>City:</label>
          <select onChange={handleChangeCities}>
            {city.map((val, i) => {
              return <option key={i} value={val}>{val}</option>
            })}
          </select>
        </div>


        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
        <div style={{textAlign: 'center', color: '#278BFF'}}>
        {result && <p>{result && (result?.toFixed(3) * 1000 * 2300)} Toman in month</p>}
          {result && <p>{result && result?.toFixed(3) * 1000} Lir in month</p>}
        </div>
        {result && <hr/>}
        {result && <span style={{ fontSize: '14px', color: '#F18623', marginTop: '10px'}}>note: accuracy is up to %70. with 1500+, 1500- error</span>}
      </form>
    </div>
  )
}

export default Glass
