export function HomeView() {
    return (
        <div className="container">
            <p>Welcome to my cooking app. You can create/retrieve/update/delete recipes and post comments to them.</p>
            <p>All users could view recipes and read comments, however only signed-in users can can post comments. The recipes could be edited/deleted only from the user that created them.</p>
        </div>
    )
}