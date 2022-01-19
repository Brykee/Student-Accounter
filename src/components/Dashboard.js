import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import Navigation from "./Navigation";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const auth = useAuth();
  const [newName, setNewName] = useState("");
  const [newTardy, setNewTardy] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(
    db,
    "users/" + auth.currentUser.uid + "/data/"
  );
  const createUser = async () => {
    setLoading(true);
    await addDoc(usersCollectionRef, {
      name: newName,
      tardy: Number(newTardy),
    }).then(() => {
      setLoading(false);
    });
  };
  const updateUser = async (id, tardy) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    const newFields = { tardy: tardy + 1 };
    await updateDoc(userDoc, newFields);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    await deleteDoc(userDoc);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      const getUsers = async () => {
        const data = await getDocs(
          query(usersCollectionRef, orderBy("tardy", "desc"))
        );
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }
  }, [loading]);
  // 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
  return (
    <>
      <Navigation />
      <div className="App">
        <h1>Tardy List</h1>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number of Tardies..."
          onChange={(event) => {
            setNewTardy(event.target.value);
          }}
        />
        <br />
        <button onClick={createUser}> Create User</button>
        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <div class="spinner-border" role="status"></div>
            </div>
          </div>
        ) : (
          <>
            {users.map((user) => {
              return (
                <div>
                  <br />
                  <h2>Name: {user.name}</h2>
                  <h2>Tardies: {user.tardy}</h2>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.tardy);
                    }}
                  >
                    Add Tardy
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import Navigation from "./Navigation";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const auth = useAuth();
  const [newName, setNewName] = useState("");
  const [newTardy, setNewTardy] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(
    db,
    "users/" + auth.currentUser.uid + "/data/"
  );
  const createUser = async () => {
    setLoading(true);
    await addDoc(usersCollectionRef, {
      name: newName,
      tardy: Number(newTardy),
    }).then(() => {
      setLoading(false);
    });
  };
  const updateUser = async (id, tardy) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    const newFields = { tardy: tardy + 1 };
    await updateDoc(userDoc, newFields);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    await deleteDoc(userDoc);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      const getUsers = async () => {
        const data = await getDocs(
          query(usersCollectionRef, orderBy("tardy", "desc"))
        );
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }
  }, [loading]);
  // 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
  return (
    <>
      <Navigation />
      <div className="App">
        <h1>Tardy List</h1>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number of Tardies..."
          onChange={(event) => {
            setNewTardy(event.target.value);
          }}
        />
        <br />
        <button onClick={createUser}> Create User</button>
        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <div class="spinner-border" role="status"></div>
            </div>
          </div>
        ) : (
          <>
            {users.map((user) => {
              return (
                <div>
                  <br />
                  <h2>Name: {user.name}</h2>
                  <h2>Tardies: {user.tardy}</h2>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.tardy);
                    }}
                  >
                    Add Tardy
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import Navigation from "./Navigation";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const auth = useAuth();
  const [newName, setNewName] = useState("");
  const [newTardy, setNewTardy] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(
    db,
    "users/" + auth.currentUser.uid + "/data/"
  );
  const createUser = async () => {
    setLoading(true);
    await addDoc(usersCollectionRef, {
      name: newName,
      tardy: Number(newTardy),
    }).then(() => {
      setLoading(false);
    });
  };
  const updateUser = async (id, tardy) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    const newFields = { tardy: tardy + 1 };
    await updateDoc(userDoc, newFields);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    await deleteDoc(userDoc);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      const getUsers = async () => {
        const data = await getDocs(
          query(usersCollectionRef, orderBy("tardy", "desc"))
        );
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }
  }, [loading]);
  // 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
  return (
    <>
      <Navigation />
      <div className="App">
        <h1>Tardy List</h1>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number of Tardies..."
          onChange={(event) => {
            setNewTardy(event.target.value);
          }}
        />
        <br />
        <button onClick={createUser}> Create User</button>
        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <div class="spinner-border" role="status"></div>
            </div>
          </div>
        ) : (
          <>
            {users.map((user) => {
              return (
                <div>
                  <br />
                  <h2>Name: {user.name}</h2>
                  <h2>Tardies: {user.tardy}</h2>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.tardy);
                    }}
                  >
                    Add Tardy
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import Navigation from "./Navigation";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const auth = useAuth();
  const [newName, setNewName] = useState("");
  const [newTardy, setNewTardy] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(
    db,
    "users/" + auth.currentUser.uid + "/data/"
  );
  const createUser = async () => {
    setLoading(true);
    await addDoc(usersCollectionRef, {
      name: newName,
      tardy: Number(newTardy),
    }).then(() => {
      setLoading(false);
    });
  };
  const updateUser = async (id, tardy) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    const newFields = { tardy: tardy + 1 };
    await updateDoc(userDoc, newFields);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "users/" + auth.currentUser.uid + "/data/", id);
    await deleteDoc(userDoc);
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      const getUsers = async () => {
        const data = await getDocs(
          query(usersCollectionRef, orderBy("tardy", "desc"))
        );
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }
  }, [loading]);
  // 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
  return (
    <>
      <Navigation />
      <div className="App">
        <h1>Tardy List</h1>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number of Tardies..."
          onChange={(event) => {
            setNewTardy(event.target.value);
          }}
        />
        <br />
        <button onClick={createUser}> Create User</button>
        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <div class="spinner-border" role="status"></div>
            </div>
          </div>
        ) : (
          <>
            {users.map((user) => {
              return (
                <div>
                  <br />
                  <h2>Name: {user.name}</h2>
                  <h2>Tardies: {user.tardy}</h2>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.tardy);
                    }}
                  >
                    Add Tardy
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
