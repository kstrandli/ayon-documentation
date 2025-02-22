---
id: manager_ftrack
title: Ftrack
sidebar_label: Project Manager
---

Ftrack is currently the main project management option for AYON. This documentation assumes that you are familiar with Ftrack and its basic principles. If you're new to Ftrack, we recommend having a thorough look at [Ftrack Official Documentation](https://help.ftrack.com/en/).

## Project management
Setting project attributes is the key to properly working pipeline.

### New Project
The best practice for creating a new project ready for AYON.
1. First of all you must [create a project](http://ftrack.rtd.ftrack.com/en/stable/using/managing_projects/creating_a_new_project.html) in Ftrack.
2. All the required attributes need to be populated. The easiest way to do it is by using [Prepare Project](manager_ftrack_actions.md#prepare-project) action.

:::tip
Do not forget to set up `applications` and `tools`, otherwise users won't be able to launch applications.
:::

3. Now you can create Project hierarchy with shots, assets, tasks and others, which has [specific rules](#synchronization-rules). [Create Project Structure](manager_ftrack_actions.md#create-project-structure) action may help you with this step.
4. Last step is to [synchronize](#synchronization-to-ayon-server) project to AYON database.

:::tip
Turn on `auto-sync` attribute on your project in ftrack. That way you'll only need to synchronise the project once and all further changes will be propagated automatically.
:::

## Synchronization to AYON server
This process describes how data from Ftrack will get into AYON server.

### How to synchronize
You can trigger synchronization manually using [Sync To AYON](manager_ftrack_actions.md#sync-to-ayon) action.

Synchronization can also be automated with AYON's [event server](#event-server) and synchronization events. If your Ftrack is [prepared for AYON](module_ftrack.md#prepare-ftrack-for-ayon), the project should have custom attribute `AYON auto-sync`. Check the custom attribute to allow auto-updates with event server.

:::tip
Always use `Sync To AYON` action before you enable `AYON auto-sync`!
:::

:::important
Synchronization actions and events can show you interface with information when something goes differently than expected. Just read carefully what happened messages should guide you.
:::

### Synchronization rules
Required:
- entity can only contain **letters**, **numbers** and **underscore** symbols.  *(In technical terms: all names must match regex: `^[a-zA-Z0-9_.]*$`)`*

Not allowed:
- duplicated entity names within project (there can be only one shot with name "sh0010" in whole project for example)
- have any **Tasks** directly on the *Project* level

### Managing Entities

There are certain situations that are very hard, or even impossible to handle automatically and will have be resolved by your TD. These include

- Deleting shots and assets after some data has already been published in them.
- Re-structuring the project hierarchy when work is already being done.
- Renaming the Project

If you need to move entity or change its name it is possible only in the acse when no-one has worked on it yet. Once work is in progreess, you must archive the old one and create new.
