import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Task from "../../components/Task";
import EmptyInfo from "../../components/EmptyInfo";
import EmptyInfoDone from "../../components/EmptyInfoDone";

type TaskType = {
  task: string;
  done: boolean;
  id: number;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [task, setTaskContent] = useState("");
  const [showListDone, setShowListDone] = useState(false);

  function handleTasksAdd() {
    const checkDoubleTask = tasks.filter((item) => item.task === task);
    if (checkDoubleTask.length > 0) {
      return Alert.alert(
        "⚠️",
        "Você está adicionando uma tarefa que já existe!"
      );
    }
    if (task.length > 0) {
      setTasks((prevState) => [
        ...prevState,
        { task: `${task}`, done: false, id: new Date().getTime() },
      ]);
      console.info(`Task adicionada: ${task}`);
      setTaskContent("");
    }
  }
  function handleDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const taskToBeMarkedAsDone = updatedTasks.find((task) => task.id === id);
    if (!taskToBeMarkedAsDone) {
      return;
    }
    taskToBeMarkedAsDone.done = !taskToBeMarkedAsDone.done;
    setTasks(updatedTasks);
  }
  function handleTasksDelete(id: number) {
    Alert.alert("❌", `Deseja realmente deletar a tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((item) => item.id != id));
          console.info("Task deletada: ID", id);
        },
      },
      { text: "Não", style: "cancel" },
    ]);
  }
  const tasksDone = tasks.filter((item) => item.done == true);
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/Logo.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.newTask}>
          <TextInput
            style={styles.textInput}
            onChangeText={setTaskContent}
            value={task}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleTasksAdd}>
            <Image source={require("../../assets/img/addIcon.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterOptions}>
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => {
              setShowListDone(false);
            }}
          >
            <Text style={styles.filterTextBlue}>Criadas</Text>
            <View style={styles.amountInfo}>
              <Text style={styles.amount}>{tasks.length}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterSection}
            onPress={() => {
              setShowListDone(!showListDone);
            }}
          >
            <Text style={styles.filterTextPurple}>Concluídas</Text>
            <View style={styles.amountInfo}>
              <Text style={styles.amount}>{tasksDone.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={showListDone ? tasksDone : tasks}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <Task
              name={item.task}
              key={item.id + ""}
              done={item.done}
              setDone={() => handleDone(item.id)}
              onRemove={() => handleTasksDelete(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() =>
            showListDone && tasksDone.length == 0 ? (
              <EmptyInfoDone />
            ) : (
              <EmptyInfo />
            )
          }
        />
      </View>
    </>
  );
}
